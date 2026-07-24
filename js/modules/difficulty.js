const STORAGE_KEY = 'lou-difficulty-level';
const LEVELS = ['all', 'beginner', 'intermediate', 'advanced'];

export function initDifficultyToggle(containerEl) {
  if (!containerEl) return;

  const savedLevel = sessionStorage.getItem(STORAGE_KEY) || 'all';

  containerEl.innerHTML = LEVELS.map(level => `
    <button
      class="difficulty-btn${level === savedLevel ? ' difficulty-btn--active' : ''}"
      data-level="${level}"
      aria-pressed="${level === savedLevel}"
    >${capitalize(level)}</button>
  `).join('');

  containerEl.addEventListener('click', e => {
    const btn = e.target.closest('.difficulty-btn');
    if (!btn) return;

    const level = btn.dataset.level;

    containerEl.querySelectorAll('.difficulty-btn').forEach(b => {
      const isActive = b.dataset.level === level;
      b.classList.toggle('difficulty-btn--active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });

    sessionStorage.setItem(STORAGE_KEY, level);
    document.body.dataset.level = level;
    filterByLevel(level);
    document.dispatchEvent(new CustomEvent('difficulty-change', { detail: { level } }));
  });

  // Apply saved level on load
  document.body.dataset.level = savedLevel;
  filterByLevel(savedLevel);
}

export function filterByLevel(level) {
  document.querySelectorAll('.content-section[data-level]').forEach(el => {
    if (level === 'all' || el.dataset.level === level) {
      el.classList.remove('content-section--hidden');
      el.removeAttribute('aria-hidden');
    } else {
      el.classList.add('content-section--hidden');
      el.setAttribute('aria-hidden', 'true');
    }
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
