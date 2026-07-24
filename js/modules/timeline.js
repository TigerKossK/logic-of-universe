import { TIMELINE_EVENTS } from '../data/timeline-data.js';

const STORAGE_KEY = 'lou-difficulty-level';
let currentLevel = 'beginner';

export function initTimeline(containerEl) {
  if (!containerEl) return;

  const saved = document.body.dataset.level || sessionStorage.getItem(STORAGE_KEY) || 'all';
  currentLevel = saved === 'all' ? 'beginner' : saved;

  renderTimeline(containerEl);

  document.addEventListener('difficulty-change', e => {
    const level = e.detail?.level;
    if (!level) return;
    currentLevel = level === 'all' ? 'beginner' : level;
    updateOpenDetails(containerEl);
  });
}

function renderTimeline(containerEl) {
  const track = document.createElement('div');
  track.className = 'timeline-track';
  track.setAttribute('role', 'list');

  TIMELINE_EVENTS.forEach(event => {
    const el = document.createElement('div');
    el.className = 'timeline-event';
    el.dataset.eventId = event.id;
    el.dataset.era = event.era;
    el.setAttribute('role', 'listitem');
    el.setAttribute('tabindex', '0');

    el.innerHTML = `
      <span class="timeline-event__icon" aria-hidden="true">${event.icon}</span>
      <span class="timeline-event__time">${event.timeLabel}</span>
      <h3 class="timeline-event__title">${event.title}</h3>
      <div class="timeline-event__detail"></div>
    `;

    el.addEventListener('click', () => toggleEvent(el, event, track));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleEvent(el, event, track);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = el.nextElementSibling;
        if (next) { next.focus(); containerEl.scrollLeft += 220; }
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = el.previousElementSibling;
        if (prev) { prev.focus(); containerEl.scrollLeft -= 220; }
      }
      if (e.key === 'Escape' && el.classList.contains('timeline-event--open')) {
        toggleEvent(el, event, track);
      }
    });

    track.appendChild(el);
  });

  containerEl.innerHTML = '';
  containerEl.appendChild(track);
}

function toggleEvent(el, event, track) {
  const detail = el.querySelector('.timeline-event__detail');
  if (!detail) return;

  const isOpen = el.classList.contains('timeline-event--open');

  // Only one event card is open at a time
  track.querySelectorAll('.timeline-event--open').forEach(openEl => {
    openEl.classList.remove('timeline-event--open');
  });

  if (!isOpen) {
    detail.innerHTML = `<p class="timeline-event__desc">${escapeHTML(getDetail(event))}</p>`;
    el.classList.add('timeline-event--open');
  }
}

function getDetail(event) {
  const lvl = ['beginner', 'intermediate', 'advanced'].includes(currentLevel)
    ? currentLevel
    : 'beginner';
  return event.fullDesc[lvl] || event.fullDesc.beginner;
}

function updateOpenDetails(containerEl) {
  containerEl.querySelectorAll('.timeline-event--open').forEach(el => {
    const event = TIMELINE_EVENTS.find(e => e.id === el.dataset.eventId);
    if (!event) return;
    const desc = el.querySelector('.timeline-event__desc');
    if (desc) desc.textContent = getDetail(event);
  });
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
