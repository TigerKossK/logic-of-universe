import { GLOSSARY } from '../data/glossary-data.js';

const TERM_KEYS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

let popover = null;
let popoverTitle = null;
let popoverBody = null;
let popoverArrow = null;
let activeTermEl = null;

export function initGlossary() {
  if (document.getElementById('glossary-popover')) return;

  popover = document.createElement('div');
  popover.id = 'glossary-popover';
  popover.className = 'glossary-popover';
  popover.setAttribute('role', 'tooltip');
  popover.setAttribute('aria-hidden', 'true');

  popover.innerHTML = `
    <button id="glossary-popover-close" class="glossary-popover__close" aria-label="Close">✕</button>
    <p id="glossary-popover-title" class="glossary-popover__title"></p>
    <p id="glossary-popover-body" class="glossary-popover__body"></p>
    <div class="glossary-popover__arrow" aria-hidden="true"></div>
  `;

  document.body.appendChild(popover);

  popoverTitle = document.getElementById('glossary-popover-title');
  popoverBody = document.getElementById('glossary-popover-body');
  popoverArrow = popover.querySelector('.glossary-popover__arrow');

  document.getElementById('glossary-popover-close').addEventListener('click', closePopover);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popover.classList.contains('glossary-popover--open')) closePopover();
  });

  document.addEventListener('click', e => {
    if (!popover.classList.contains('glossary-popover--open')) return;
    if (!popover.contains(e.target) && e.target !== activeTermEl) {
      closePopover();
    }
  });
}

export function processSection(sectionEl) {
  if (!sectionEl) return;

  const strongEls = sectionEl.querySelectorAll('strong');
  strongEls.forEach(strong => {
    const text = strong.textContent.trim().toLowerCase();
    const matchedKey = TERM_KEYS.find(key => {
      if (text === key) return true;
      if (!text.startsWith(key)) return false;
      return /^(?:s|es|'s)?$/.test(text.slice(key.length));
    });
    if (!matchedKey) return;
    if (strong.querySelector('.glossary-term')) return;

    const span = document.createElement('span');
    span.className = 'glossary-term';
    span.dataset.term = matchedKey;
    span.setAttribute('tabindex', '0');
    span.setAttribute('role', 'button');
    span.setAttribute('aria-label', `Definition: ${strong.textContent.trim()}`);
    span.textContent = strong.textContent;

    strong.textContent = '';
    strong.appendChild(span);

    span.addEventListener('click', e => {
      e.stopPropagation();
      openPopover(span, matchedKey);
    });
    span.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPopover(span, matchedKey);
      }
    });
  });
}

function openPopover(termEl, key) {
  if (!popover || !GLOSSARY[key]) return;

  activeTermEl = termEl;
  popoverTitle.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  popoverBody.textContent = GLOSSARY[key];
  popover.classList.add('glossary-popover--open');
  popover.setAttribute('aria-hidden', 'false');

  positionPopover(termEl);
}

function positionPopover(termEl) {
  const rect = termEl.getBoundingClientRect();
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  const popoverWidth = 300;
  const gap = 12; // clears the arrow

  let left = rect.left + scrollX;
  const top = rect.bottom + scrollY + gap;

  // Keep within viewport horizontally
  if (left + popoverWidth > window.innerWidth - 16) {
    left = window.innerWidth - popoverWidth - 16;
  }
  if (left < 8) left = 8;

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;

  // Point the arrow at the term even after the popover shifts to stay on-screen
  if (popoverArrow) {
    const termCenter = rect.left + scrollX + rect.width / 2 - left - 6;
    popoverArrow.style.left = `${Math.min(Math.max(termCenter, 12), popoverWidth - 24)}px`;
  }
}

function closePopover() {
  if (!popover) return;
  popover.classList.remove('glossary-popover--open');
  popover.setAttribute('aria-hidden', 'true');
  activeTermEl?.focus();
  activeTermEl = null;
}
