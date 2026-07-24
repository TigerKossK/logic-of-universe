export function initNav(currentPage) {
  setActiveLink(currentPage);
  initMobileToggle();
  closeNavOnOutsideClick();
  initScrollState();
}

function initScrollState() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('site-header--scrolled', window.scrollY > 80);
  }, { passive: true });
}

function setActiveLink(currentPage) {
  if (!currentPage) return;
  document.querySelectorAll('.nav-link[data-page-link]').forEach(link => {
    if (link.dataset.pageLink === currentPage) {
      link.classList.add('nav-link--active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initMobileToggle() {
  const toggle = document.getElementById('nav-mobile-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('site-nav--mobile-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('site-nav--mobile-open')) {
      nav.classList.remove('site-nav--mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

function closeNavOnOutsideClick() {
  document.addEventListener('click', e => {
    const nav = document.getElementById('site-nav');
    const toggle = document.getElementById('nav-mobile-toggle');
    if (!nav || !toggle) return;

    if (!nav.contains(e.target) && nav.classList.contains('site-nav--mobile-open')) {
      nav.classList.remove('site-nav--mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
