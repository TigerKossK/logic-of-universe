import { SEARCH_INDEX } from '../data/search-index.js';

const RECENT_KEY = 'lou-recent-searches';
const MAX_RECENT = 5;

function getRecentSearches() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveRecentSearch(query) {
  if (!query || !query.trim()) return;
  const q = query.trim();
  let recent = getRecentSearches().filter(r => r.toLowerCase() !== q.toLowerCase());
  recent.unshift(q);
  recent = recent.slice(0, MAX_RECENT);
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
  } catch { /* storage full */ }
}

function clearRecentSearch(query) {
  const recent = getRecentSearches().filter(r => r !== query);
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
  } catch { /* ignore */ }
}

const TOP_SUGGESTIONS = [
  { label: 'Black Holes', query: 'black hole' },
  { label: 'How Stars Die', query: 'stellar death' },
  { label: 'Solar System', query: 'solar system' },
  { label: 'Supernovas', query: 'supernova' },
  { label: 'Neutron Stars', query: 'neutron star' },
  { label: 'Quasars', query: 'quasar' },
  { label: 'What Is a Pulsar?', query: 'pulsar' },
  { label: 'Gold from Space', query: 'kilonova gold' },
];

let debounceTimer = null;
let inputEl = null;
let suggestionsEl = null;
let resultsEl = null;

export function initSearch(input, suggestions, results) {
  if (!input || !suggestions || !results) return;
  inputEl = input;
  suggestionsEl = suggestions;
  resultsEl = results;

  renderTopSuggestions();
  attachListeners();
}

function renderTopSuggestions() {
  const recent = getRecentSearches();
  let html = '';

  if (recent.length > 0) {
    html += `
      <p class="search-suggestions__label">Recent searches</p>
      <div class="search-suggestions__chips search-suggestions__chips--recent">
        ${recent.map(q => `
          <span class="search-suggestion-chip search-suggestion-chip--recent">
            <button class="search-suggestion-chip__text" data-query="${escapeHTML(q)}">${escapeHTML(q)}</button>
            <button class="search-suggestion-chip__clear" data-clear-query="${escapeHTML(q)}" aria-label="Remove ${escapeHTML(q)} from recent searches">×</button>
          </span>
        `).join('')}
      </div>
    `;
  }

  html += `
    <p class="search-suggestions__label">Popular searches</p>
    <div class="search-suggestions__chips">
      ${TOP_SUGGESTIONS.map(s => `
        <button class="search-suggestion-chip" data-query="${s.query}">${s.label}</button>
      `).join('')}
    </div>
  `;

  suggestionsEl.innerHTML = html;

  // Attach clear buttons for recent items
  suggestionsEl.querySelectorAll('.search-suggestion-chip__clear').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      clearRecentSearch(btn.dataset.clearQuery);
      renderTopSuggestions();
    });
  });
}

function attachListeners() {
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('input', onInput);
  inputEl.addEventListener('keydown', onKeydown);

  suggestionsEl.addEventListener('click', e => {
    // Both plain chips and the inner text button of recent chips carry data-query
    const queryBtn = e.target.closest('[data-query]');
    if (queryBtn && !e.target.closest('.search-suggestion-chip__clear')) {
      const q = queryBtn.dataset.query;
      inputEl.value = q;
      runSearch(q);
    }
  });

  document.addEventListener('click', e => {
    const wrapper = document.getElementById('search-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
      collapse();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { collapse(); return; }
    // Press / anywhere to jump to the search box (skip if typing in an input)
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      inputEl.focus();
    }
  });
}

function onFocus() {
  expand();
  if (!inputEl.value.trim()) {
    showSuggestions();
    hideResults();
  }
}

function onInput() {
  clearTimeout(debounceTimer);
  const query = inputEl.value.trim();

  if (!query) {
    showSuggestions();
    hideResults();
    return;
  }

  debounceTimer = setTimeout(() => runSearch(query), 200);
}

function onKeydown(e) {
  // Basic arrow-key navigation through results
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const items = resultsEl.querySelectorAll('.search-result-item');
    if (items.length) items[0].focus();
  }
}

function runSearch(query) {
  const results = performSearch(query);
  hideSuggestions();
  renderResults(results, query);
  showResults();
  // Save to recent when query comes from a suggestion chip
  if (query && query === inputEl.value.trim()) saveRecentSearch(query);
}

export function performSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const titleMatches = [];
  const keywordMatches = [];

  SEARCH_INDEX.forEach(entry => {
    if (!entry?.title || !entry?.keywords || !entry?.excerpt) return;
    const titleMatch = entry.title.toLowerCase().includes(q);
    const keywordMatch = entry.keywords.some(kw => kw.toLowerCase().includes(q));
    const excerptMatch = entry.excerpt.toLowerCase().includes(q);

    if (titleMatch) {
      titleMatches.push({ ...entry, _matchType: 'title' });
    } else if (keywordMatch || excerptMatch) {
      keywordMatches.push({ ...entry, _matchType: 'keyword' });
    }
  });

  return [...titleMatches, ...keywordMatches].slice(0, 15);
}

function renderResults(results, query) {
  if (results.length === 0) {
    resultsEl.innerHTML = `<li class="search-result-item search-result-item--empty" role="option" aria-selected="false">
      No results for "<strong>${escapeHTML(query)}</strong>"
    </li>`;
    return;
  }

  const currentPage = getCurrentPage();

  resultsEl.innerHTML = results.map(result => {
    const highlightedTitle = highlightMatches(result.title, query);
    const highlightedExcerpt = highlightMatches(result.excerpt, query);
    const isSamePage = isSameCurrentPage(result.page, currentPage);
    const pageLabel = formatPageLabel(result.page);

    return `<li
      class="search-result-item"
      role="option"
      aria-selected="false"
      tabindex="-1"
      data-page="${result.page}"
      data-section-id="${result.sectionId}"
      data-query="${escapeHTML(query)}"
    >
      <div class="search-result-item__header">
        <span class="search-result-item__title">${highlightedTitle}</span>
        <span class="level-badge level-badge--${result.level}">${capitalize(result.level)}</span>
      </div>
      <p class="search-result-item__excerpt">${highlightedExcerpt}</p>
      <span class="search-result-item__page${isSamePage ? ' search-result-item__page--current' : ''}">${isSamePage ? 'This page' : pageLabel}</span>
    </li>`;
  }).join('');

  // Click handler for results
  resultsEl.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => handleResultClick(item));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleResultClick(item); }
      if (e.key === 'ArrowDown') { e.preventDefault(); item.nextElementSibling?.focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); item.previousElementSibling ? item.previousElementSibling.focus() : inputEl.focus(); }
    });
  });
}

function handleResultClick(item) {
  const page = item.dataset.page;
  const sectionId = item.dataset.sectionId;
  const query = item.dataset.query;
  const currentPage = getCurrentPage();

  saveRecentSearch(query);
  collapse();

  if (isSameCurrentPage(page, currentPage)) {
    // Same page — scroll to section
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (target.dataset.planetId) {
        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      } else {
        target.classList.add('content-section--search-active');
        setTimeout(() => target.classList.remove('content-section--search-active'), 3000);
      }
    }
  } else {
    // Different page — navigate with query param for highlighting
    const basePath = getBasePath();
    window.location.href = `${basePath}pages/${page}?highlight=${encodeURIComponent(query)}#${sectionId}`;
  }
}

export function highlightMatches(text, query) {
  if (!query || !text) return escapeHTML(text);
  const escaped = escapeHTML(text);
  const escapedQuery = escapeRegex(escapeHTML(query));
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return escaped.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function expand() {
  const wrapper = document.getElementById('search-wrapper');
  wrapper?.classList.add('search-wrapper--expanded');
  inputEl.setAttribute('aria-expanded', 'true');
}

function collapse() {
  const wrapper = document.getElementById('search-wrapper');
  wrapper?.classList.remove('search-wrapper--expanded');
  inputEl.setAttribute('aria-expanded', 'false');
  hideSuggestions();
  hideResults();
}

function showSuggestions() {
  suggestionsEl.hidden = false;
  suggestionsEl.classList.add('search-suggestions--visible');
}

function hideSuggestions() {
  suggestionsEl.hidden = true;
  suggestionsEl.classList.remove('search-suggestions--visible');
}

function showResults() {
  resultsEl.hidden = false;
  resultsEl.classList.add('search-results--visible');
}

function hideResults() {
  resultsEl.hidden = true;
  resultsEl.classList.remove('search-results--visible');
}

function getCurrentPage() {
  return document.body.dataset.page || 'home';
}

function isSameCurrentPage(resultPage, currentPage) {
  const pageMap = {
    'home': 'index.html',
    'stars': 'stars.html',
    'stellar-objects': 'stellar-objects.html',
    'black-holes': 'black-holes.html',
    'solar-system': 'solar-system.html',
    'explosions': 'explosions.html',
  };
  return pageMap[currentPage] === resultPage;
}

function getBasePath() {
  const page = document.body.dataset.page;
  return page === 'home' ? '' : '../';
}

function formatPageLabel(page) {
  const labels = {
    'stars.html': 'Stars',
    'stellar-objects.html': 'Stellar Objects',
    'black-holes.html': 'Black Holes',
    'solar-system.html': 'Solar System',
    'explosions.html': 'Cosmic Explosions',
  };
  return labels[page] || page;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
