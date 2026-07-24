export function initSettings() {
  // Read saved prefs from localStorage
  const savedTheme = localStorage.getItem('lou-theme') || 'dark';
  const savedSearch = localStorage.getItem('lou-search-enabled') !== 'false';

  // Apply saved theme on init
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Apply search visibility on init
  const searchWrapper = document.getElementById('search-wrapper');
  if (searchWrapper) searchWrapper.classList.toggle('search-wrapper--hidden', !savedSearch);

  const btn = document.getElementById('nav-settings-btn');
  const panel = document.getElementById('settings-panel');
  const backdrop = document.getElementById('settings-panel-backdrop');
  const closeBtn = document.getElementById('settings-panel-close');
  const body = document.getElementById('settings-panel-body');

  if (!btn || !panel) return;

  const isLight = savedTheme === 'light';

  // Render settings content (class names match the CSS contract in css/style.css:
  // .settings-section / .settings-section__title / .settings-toggle-row /
  // .settings-toggle (+ --on) / .settings-toggle__knob / .settings-select)
  body.innerHTML = `
    <div class="settings-section">
      <p class="settings-section__title">Language</p>
      <select class="settings-select" id="settings-lang" aria-label="Select language">
        <option value="en" selected>English</option>
        <option value="hy">Armenian (coming soon)</option>
        <option value="ru">Russian (coming soon)</option>
        <option value="es">Spanish (coming soon)</option>
      </select>
      <div class="settings-toggle-row" id="settings-lang-notice" hidden style="display: none;">
        <span class="settings-toggle-row__sublabel">More languages are coming soon — English is available now.</span>
      </div>
    </div>
    <div class="settings-section">
      <p class="settings-section__title">Appearance</p>
      <div class="settings-toggle-row">
        <span class="settings-toggle-row__label">Light theme</span>
        <button type="button" class="settings-toggle${isLight ? ' settings-toggle--on' : ''}" id="settings-theme-toggle" role="switch" aria-checked="${isLight}" aria-label="Toggle light theme">
          <span class="settings-toggle__knob"></span>
        </button>
      </div>
      <div class="settings-toggle-row">
        <span class="settings-toggle-row__label">Show search bar</span>
        <button type="button" class="settings-toggle${savedSearch ? ' settings-toggle--on' : ''}" id="settings-search-toggle" role="switch" aria-checked="${savedSearch}" aria-label="Toggle search bar">
          <span class="settings-toggle__knob"></span>
        </button>
      </div>
    </div>
  `;

  // Language change handler — only English is live; other picks revert + show notice
  // .settings-toggle-row sets its own `display`, so [hidden] alone has no visual
  // effect — toggle inline style.display too.
  document.getElementById('settings-lang').addEventListener('change', e => {
    const val = e.target.value;
    const notice = document.getElementById('settings-lang-notice');
    if (val !== 'en') {
      notice.hidden = false;
      notice.style.display = '';
      e.target.value = 'en'; // revert
    } else {
      notice.hidden = true;
      notice.style.display = 'none';
    }
    localStorage.setItem('lou-lang', 'en');
  });

  // Theme switch (OFF = dark, ON = light). Click anywhere on the row toggles it.
  const themeToggle = document.getElementById('settings-theme-toggle');
  themeToggle.closest('.settings-toggle-row').addEventListener('click', () => {
    const goingLight = themeToggle.getAttribute('aria-checked') !== 'true';
    const newTheme = goingLight ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('lou-theme', newTheme);
    themeToggle.setAttribute('aria-checked', String(goingLight));
    themeToggle.classList.toggle('settings-toggle--on', goingLight);
  });

  // Search bar show/hide switch. Click anywhere on the row toggles it.
  const searchToggle = document.getElementById('settings-search-toggle');
  searchToggle.closest('.settings-toggle-row').addEventListener('click', () => {
    const show = searchToggle.getAttribute('aria-checked') !== 'true';
    const sw = document.getElementById('search-wrapper');
    if (sw) sw.classList.toggle('search-wrapper--hidden', !show);
    localStorage.setItem('lou-search-enabled', String(show));
    searchToggle.setAttribute('aria-checked', String(show));
    searchToggle.classList.toggle('settings-toggle--on', show);
  });

  function openPanel() {
    panel.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(() => panel.classList.add('settings-panel--open'));
    btn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }

  function closePanel() {
    panel.classList.remove('settings-panel--open');
    backdrop.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
    // Hide after the slide-out transition, with a timeout fallback in case
    // transitionend never fires (e.g. transitions disabled / reduced motion).
    let hidden = false;
    const hidePanel = () => { if (!hidden) { hidden = true; panel.hidden = true; } };
    const fallback = setTimeout(hidePanel, 400);
    panel.addEventListener('transitionend', () => { clearTimeout(fallback); hidePanel(); }, { once: true });
  }

  btn.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) closePanel(); });
}
