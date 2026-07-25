import { initNav } from './modules/nav.js';
import { initSearch } from './modules/search.js';
import { initDifficultyToggle } from './modules/difficulty.js';
import { initSolarExplorer } from './modules/solar-explorer.js';
import { fetchAPOD } from './modules/nasa.js';
import { renderContentPage } from './modules/content-renderer.js';
import { initTimeline } from './modules/timeline.js';
import { initSettings } from './modules/settings.js';
import { initStatsCounter } from './modules/stats-counter.js';
import { initLiveFeed } from './modules/live-feed.js';
import { initCosmicProfile } from './modules/cosmic-profile.js';

document.addEventListener('DOMContentLoaded', async () => {
  const page = document.body.dataset.page;

  // Settings runs first on every page (applies saved theme before anything renders)
  initSettings();

  // Runs on every page
  initNav(page);
  initSearch(
    document.getElementById('search-input'),
    document.getElementById('search-suggestions'),
    document.getElementById('search-results')
  );

  // Content pages get the difficulty toggle
  const contentPages = ['stars', 'stellar-objects', 'black-holes', 'explosions'];
  if (contentPages.includes(page)) {
    initDifficultyToggle(document.getElementById('difficulty-toggle'));
    await renderContentPage(page);
  }

  // Solar system gets the planet explorer (its own per-planet level selector
  // replaces the page-level difficulty bar)
  if (page === 'solar-system') {
    initSolarExplorer(document.getElementById('planet-grid'));
    initCosmicProfile(document.querySelector('#cosmic-profile .cosmic-profile__inner'));
  }

  // Homepage gets APOD navigation, timeline, and stat counters
  if (page === 'home') {
    initApodNav();
    initTimeline(document.getElementById('timeline-container'));
    initStatsCounter(document.querySelector('.universe-stats__inner'));
    initLiveFeed(document.querySelector('#live-feed .live-feed__inner'));
  }

  // Back-to-top button (runs on every page)
  const backToTop = document.createElement('button');
  backToTop.id = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>`;
  backToTop.hidden = true;
  document.body.appendChild(backToTop);

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const visible = window.scrollY > 300;
        backToTop.hidden = !visible;
        backToTop.classList.toggle('back-to-top--visible', visible);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Handle hash-based search navigation: pages/stars.html#some-section?highlight=query
  handleHashNavigation();
});

function todayDateString() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}`;
}

function offsetDate(dateStr, days) {
  const d = new Date(dateStr + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + days);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

function initApodNav() {
  const prevBtn = document.getElementById('apod-prev-btn');
  const nextBtn = document.getElementById('apod-next-btn');

  let currentDate = todayDateString();

  // Load today's APOD on start
  loadAPOD(currentDate, true);

  prevBtn?.addEventListener('click', () => {
    currentDate = offsetDate(currentDate, -1);
    loadAPOD(currentDate, false);
  });

  nextBtn?.addEventListener('click', () => {
    const today = todayDateString();
    if (currentDate >= today) return;
    currentDate = offsetDate(currentDate, +1);
    loadAPOD(currentDate, currentDate >= today);
  });
}

async function loadAPOD(dateStr, isToday) {
  const card = document.getElementById('apod-card');
  const imageWrap = document.getElementById('apod-image-wrap');
  const titleEl = document.getElementById('apod-title');
  const dateEl = document.getElementById('apod-date');
  const explanationEl = document.getElementById('apod-explanation');
  const nextBtn = document.getElementById('apod-next-btn');

  if (card) card.setAttribute('aria-busy', 'true');

  // Show loading spinner (re-create if needed)
  if (imageWrap) {
    imageWrap.innerHTML = `
      <div class="apod-card__loading" aria-label="Loading astronomy picture">
        <span class="loading-spinner" aria-hidden="true"></span>
      </div>`;
  }

  const apod = await fetchAPOD(window.NASA_API_KEY || 'DEMO_KEY', dateStr);
  if (card) card.setAttribute('aria-busy', 'false');

  // Handle structured error responses from fetchAPOD
  if (!apod || apod.error) {
    if (imageWrap) {
      if (apod?.error === 'rate-limit') {
        imageWrap.innerHTML = '<p class="apod-card__notice">NASA image limit reached for today. Try again tomorrow, or <a href="https://api.nasa.gov/" target="_blank" rel="noopener">get a free NASA API key</a>.</p>';
      } else if (apod?.error === 'not-found') {
        imageWrap.innerHTML = '<p class="apod-card__notice">No image is available for this date.</p>';
      } else {
        imageWrap.innerHTML = '<p class="apod-card__notice">Could not load the astronomy picture. Please try again later.</p>';
      }
    }
    return;
  }

  if (imageWrap) {
    if (apod.media_type === 'video') {
      imageWrap.innerHTML = `<iframe
        class="apod-card__video"
        src="${apod.url}"
        title="${apod.title}"
        frameborder="0"
        allowfullscreen
        loading="lazy"
      ></iframe>`;
    } else {
      imageWrap.innerHTML = '';
      const img = document.createElement('img');
      img.className = 'apod-card__image';
      img.src = apod.hdurl || apod.url;
      img.alt = apod.title;
      img.loading = 'lazy';
      imageWrap.appendChild(img);
    }
  }

  if (titleEl) titleEl.textContent = apod.title;
  if (dateEl) dateEl.textContent = new Date(apod.date + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  if (explanationEl) explanationEl.textContent = apod.explanation;

  // Disable "Next Day" when already at today
  if (nextBtn) nextBtn.disabled = !!isToday;
}

function handleHashNavigation() {
  const hash = window.location.hash;
  if (!hash) return;

  const sectionId = hash.replace('#', '');
  const params = new URLSearchParams(window.location.search);
  const highlight = params.get('highlight');

  const target = document.getElementById(sectionId);
  if (!target) return;

  // Small delay to let content render first
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (target.dataset.planetId) {
      target.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      return;
    }

    target.classList.add('content-section--search-active');

    if (highlight) {
      highlightTextInElement(target, highlight);
    }

    // Remove highlight class after animation
    setTimeout(() => target.classList.remove('content-section--search-active'), 3000);
  }, 300);
}

function highlightTextInElement(element, query) {
  const body = element.querySelector('.section-body');
  if (!body) return;

  // DOM-safe text highlighting — never uses innerHTML with user input
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');

  function walkAndHighlight(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (!regex.test(text)) return;
      regex.lastIndex = 0;

      const frag = document.createDocumentFragment();
      let lastIndex = 0;
      let match;
      while ((match = regex.exec(text)) !== null) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        const mark = document.createElement('mark');
        mark.className = 'search-highlight';
        mark.textContent = match[0];
        frag.appendChild(mark);
        lastIndex = match.index + match[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'MARK') {
      Array.from(node.childNodes).forEach(walkAndHighlight);
    }
  }
  walkAndHighlight(body);

  // Add clear button
  const clearBtn = document.createElement('button');
  clearBtn.className = 'search-highlight-clear';
  clearBtn.textContent = 'Clear highlights';
  clearBtn.addEventListener('click', () => {
    body.querySelectorAll('.search-highlight').forEach(mark => {
      mark.replaceWith(mark.textContent);
    });
    clearBtn.remove();
  });
  element.querySelector('.section-header')?.appendChild(clearBtn);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
