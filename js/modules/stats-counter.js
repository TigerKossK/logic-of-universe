const STATS = [
  {
    label: 'Age of the Universe',
    value: 13.8,
    unit: 'billion years',
    suffix: '',
    icon: '⧖',
    decimals: 1,
  },
  {
    label: 'Stars in the Milky Way',
    value: 400,
    unit: 'billion',
    suffix: '',
    icon: '★',
  },
  {
    label: 'Age of the oldest known star (Methuselah)',
    value: 13.6,
    unit: 'billion years',
    suffix: '',
    icon: '✦',
    decimals: 1,
  },
  {
    label: 'Mass of Phoenix A — the largest known black hole',
    value: 100,
    unit: 'billion solar masses',
    suffix: '',
    icon: '⬤',
  },
  {
    label: 'Hercules–Corona Borealis Great Wall — largest known structure',
    value: 10,
    unit: 'billion light-years wide',
    suffix: '',
    icon: '⬡',
  },
  {
    label: 'Galaxies in the observable universe',
    value: 2,
    unit: 'trillion',
    suffix: '+',
    icon: '◎',
  },
];

/**
 * Animate a single counter element from 0 to its target value.
 * @param {HTMLElement} el - the element displaying the number
 * @param {number} target - final numeric value
 * @param {number} decimals - decimal places to display (default 0)
 * @param {number} duration - animation duration in ms (default 1800)
 */
function animateCounter(el, target, decimals = 0, duration = 1800) {
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = current.toFixed(decimals);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toFixed(decimals);
    }
  }

  requestAnimationFrame(step);
}

/**
 * Render stat cards into `containerEl` and trigger count-up animations
 * when each card enters the viewport.
 * @param {HTMLElement} containerEl
 */
export function initStatsCounter(containerEl) {
  if (!containerEl) return;

  containerEl.innerHTML = STATS.map((stat, i) => `
    <div class="stat-card" data-index="${i}" aria-label="${stat.label}: ${stat.value} ${stat.unit}${stat.suffix}">
      <span class="stat-card__icon" aria-hidden="true">${stat.icon}</span>
      <div class="stat-card__number-wrap">
        <span class="stat-card__value" data-target="${stat.value}" data-decimals="${stat.decimals ?? 0}">0</span>
        <span class="stat-card__unit">${stat.unit}${stat.suffix}</span>
      </div>
      <p class="stat-card__label">${stat.label}</p>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const card = entry.target;
      card.classList.add('stat-card--visible');

      const valueEl = card.querySelector('.stat-card__value');
      if (!valueEl) return;

      const target = parseFloat(valueEl.dataset.target);
      const decimals = parseInt(valueEl.dataset.decimals, 10) || 0;

      animateCounter(valueEl, target, decimals);
      obs.unobserve(card); // animate once
    });
  }, {
    threshold: 0.3,
  });

  containerEl.querySelectorAll('.stat-card').forEach(card => observer.observe(card));
}
