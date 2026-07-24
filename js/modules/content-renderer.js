import { STARS_CONTENT } from '../data/stars-content.js';
import { STELLAR_CONTENT } from '../data/stellar-content.js';
import { BLACKHOLES_CONTENT } from '../data/blackholes-content.js';
import { EXPLOSIONS_CONTENT } from '../data/explosions-content.js';
import { searchNasaImages } from './nasa.js';
import { QUIZ_DATA } from '../data/quiz-data.js';
import { initQuiz, openQuiz } from './quiz.js';
import { initGlossary, processSection } from './glossary.js';

const PAGE_CONTENT_MAP = {
  'stars': STARS_CONTENT,
  'stellar-objects': STELLAR_CONTENT,
  'black-holes': BLACKHOLES_CONTENT,
  'explosions': EXPLOSIONS_CONTENT,
};

export async function renderContentPage(page) {
  const container = document.getElementById('content-sections');
  if (!container) return;

  const sections = PAGE_CONTENT_MAP[page];
  if (!sections) return;

  initQuiz();
  initGlossary();

  const level = document.body.dataset.level || 'all';

  // Render all sections immediately with content
  container.innerHTML = sections.map(section => buildSectionHTML(section)).join('');

  // Post-render: attach copy buttons, quiz buttons, and glossary to each section
  sections.forEach(section => {
    const sectionEl = document.getElementById(section.id);
    if (!sectionEl) return;

    // Copy section link button
    const header = sectionEl.querySelector('.section-header');
    if (header && !header.querySelector('.section-copy-btn')) {
      const btn = document.createElement('button');
      btn.className = 'section-copy-btn';
      btn.setAttribute('aria-label', 'Copy link to this section');
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

      btn.addEventListener('click', e => {
        e.stopPropagation();
        const url = `${location.origin}${location.pathname}#${sectionEl.id}`;
        navigator.clipboard.writeText(url).then(() => {
          btn.classList.add('section-copy-btn--copied');
          btn.setAttribute('aria-label', 'Link copied!');
          setTimeout(() => {
            btn.classList.remove('section-copy-btn--copied');
            btn.setAttribute('aria-label', 'Copy link to this section');
          }, 2000);
        });
      });

      header.appendChild(btn);
    }

    // Glossary — wrap matching <strong> terms with tooltip triggers
    processSection(sectionEl);

    // Quiz — append trigger button if this section has quiz data
    if (QUIZ_DATA[section.id]) {
      const btn = document.createElement('button');
      btn.className = 'quiz-trigger-btn';
      btn.dataset.sectionId = section.id;
      btn.textContent = 'Test Your Knowledge →';
      btn.addEventListener('click', () => {
        const activeLevel = document.body.dataset.level || 'all';
        const quizLevel = activeLevel === 'all' ? 'beginner' : activeLevel;
        openQuiz(section.id, quizLevel);
      });
      sectionEl.appendChild(btn);
    }
  });

  // Then load images in the background (non-blocking).
  // Prefers a curated direct mediaUrl when present; otherwise uses the NASA search API.
  sections.forEach(section => {
    if (section.id && section.title && (section.mediaUrl || section.nasaSearchQuery)) {
      loadSectionImage(
        section.id,
        section.nasaSearchQuery,
        section.title,
        section.mediaUrl,
        section.mediaCaption
      ).catch(err => console.warn(`Image load failed for ${section.id}:`, err));
    }
  });
}

function buildSectionHTML(section) {
  const relatedHTML = section.relatedTopics?.length
    ? `<div class="related-topics">
        <span class="related-topics__label">Related:</span>
        ${section.relatedTopics.map(t => `<a class="related-topics__chip" href="${t.href}" data-topic="${topicFromHref(t.href)}">${t.label}</a>`).join('')}
      </div>`
    : '';

  return `
    <section
      class="content-section"
      id="${section.id}"
      data-level="${section.level}"
      data-keywords="${section.keywords.join(', ')}"
    >
      <div class="section-header">
        <h2 class="section-title">${section.title}</h2>
        <span class="level-badge level-badge--${section.level}">${capitalize(section.level)}</span>
      </div>
      <div class="section-body content-body">
        ${section.body}
      </div>
      ${relatedHTML}
      <div class="section-media section-media--loading" id="section-media-${section.id}" aria-label="Loading NASA image">
        <span class="loading-spinner" aria-hidden="true"></span>
      </div>
    </section>
  `;
}

async function loadSectionImage(sectionId, query, title, directUrl, directCaption) {
  const mediaEl = document.getElementById(`section-media-${sectionId}`);
  if (!mediaEl) return;

  // 1) Prefer a curated, free direct image URL when one is provided.
  //    Only swap it in once it has actually loaded — fall back on any failure.
  if (directUrl) {
    const shown = await tryRenderImage(mediaEl, directUrl, directCaption || title, title);
    if (shown) return;
  }

  // 2) Fall back to the NASA Image Library search API.
  if (query) {
    const images = await searchNasaImages(query, 1);
    // Check for error object
    if (images && images.error) {
      const sub = images.error === 'rate-limit'
        ? 'NASA image limit reached — try again later'
        : 'Images temporarily unavailable';
      renderMediaFallback(mediaEl, sub);
      return;
    }
    if (Array.isArray(images) && images.length > 0) {
      const shown = await tryRenderImage(mediaEl, images[0].imageUrl, images[0].title, title);
      if (shown) return;
    }
  }

  // 3) Nothing loaded — show the styled fallback instead of leaving a blank box.
  renderMediaFallback(mediaEl, 'NASA image limit reached or no results');
}

function renderMediaFallback(mediaEl, subMessage) {
  mediaEl.classList.remove('section-media--loading');
  mediaEl.classList.add('section-media--fallback');
  mediaEl.innerHTML = `
    <span class="section-media__fallback-icon" aria-hidden="true">🔭</span>
    <p class="section-media__fallback-msg">No image available</p>
    <p class="section-media__fallback-sub">${subMessage}</p>
  `;
}

/**
 * Load an image off-DOM and only insert it once it has successfully loaded.
 * Resolves true when the image is displayed, false if it failed to load.
 */
function tryRenderImage(mediaEl, imageUrl, caption, altTitle) {
  return new Promise(resolve => {
    if (!imageUrl) { resolve(false); return; }

    const img = new Image();
    img.className = 'section-media__image';
    img.loading = 'lazy';
    img.alt = caption || `Image related to ${altTitle}`;

    img.onload = () => {
      if (!mediaEl.isConnected) { resolve(false); return; }
      mediaEl.classList.remove('section-media--loading');
      mediaEl.innerHTML = '';
      mediaEl.appendChild(img);

      if (caption) {
        const figcaption = document.createElement('figcaption');
        figcaption.className = 'section-media__caption';
        figcaption.textContent = caption;
        mediaEl.appendChild(figcaption);
      }
      resolve(true);
    };
    img.onerror = () => resolve(false);
    img.src = imageUrl;
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function topicFromHref(href) {
  const page = href.match(/\/pages\/([a-z-]+)\.html/)?.[1] || '';
  return page === 'stellar-objects' ? 'stellar' : page;
}
