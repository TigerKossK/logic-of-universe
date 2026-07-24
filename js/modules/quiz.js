import { QUIZ_DATA } from '../data/quiz-data.js';

let panel = null;
let panelBody = null;
let panelTitle = null;
let progressFill = null;
let backdrop = null;

let currentSectionId = null;
let currentLevel = 'beginner';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

export function initQuiz() {
  if (document.getElementById('quiz-panel')) return;

  panel = document.createElement('div');
  panel.id = 'quiz-panel';
  panel.className = 'quiz-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'quiz-panel-title');
  panel.hidden = true;

  panel.innerHTML = `
    <div class="quiz-canvas">
      <div class="quiz-header">
        <h2 class="quiz-panel__title" id="quiz-panel-title"></h2>
        <button class="quiz-panel__close" id="quiz-panel-close" aria-label="Close quiz">&#10005;</button>
      </div>
      <div class="quiz-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div class="quiz-progress-bar__fill" style="width: 0%"></div>
      </div>
      <div class="quiz-panel__body" id="quiz-panel-body"></div>
    </div>
  `;

  backdrop = document.createElement('div');
  backdrop.className = 'quiz-panel__backdrop';
  backdrop.id = 'quiz-panel-backdrop';
  backdrop.hidden = true;

  // Backdrop is a body-level sibling (not nested in the panel) so it sits
  // behind the quiz-canvas instead of painting a blur over the questions.
  document.body.appendChild(backdrop);
  document.body.appendChild(panel);

  panelTitle = document.getElementById('quiz-panel-title');
  panelBody = document.getElementById('quiz-panel-body');
  progressFill = panel.querySelector('.quiz-progress-bar__fill');

  document.getElementById('quiz-panel-close').addEventListener('click', closeQuiz);
  backdrop.addEventListener('click', closeQuiz);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel && !panel.hidden) closeQuiz();
  });
}

export function openQuiz(sectionId, level) {
  const data = QUIZ_DATA[sectionId];
  if (!data) return;

  const validLevels = ['beginner', 'intermediate', 'advanced'];
  const lvl = validLevels.includes(level) ? level : 'beginner';
  const questions = data[lvl];
  if (!questions || questions.length === 0) return;

  currentSectionId = sectionId;
  currentLevel = lvl;
  currentQuestions = questions;
  currentIndex = 0;
  score = 0;
  answered = false;

  panelTitle.textContent = `Quiz: ${data.title}`;
  if (progressFill) progressFill.style.width = '0%';
  panel.hidden = false;
  if (backdrop) backdrop.hidden = false;
  renderQuestion();

  setTimeout(() => document.getElementById('quiz-panel-close')?.focus(), 50);
}

function closeQuiz() {
  if (panel) panel.hidden = true;
  if (backdrop) backdrop.hidden = true;
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  if (!q) { renderScore(); return; }

  answered = false;

  // Update progress bar
  if (progressFill) {
    progressFill.style.width = ((currentIndex / currentQuestions.length) * 100) + '%';
  }

  const letters = ['A', 'B', 'C', 'D', 'E'];

  panelBody.innerHTML = `
    <div class="quiz-progress">Question ${currentIndex + 1} of ${currentQuestions.length}</div>
    <p class="quiz-question">${escapeHTML(q.question)}</p>
    <div class="quiz-options" role="group" aria-label="Answer options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">
          <span class="quiz-option__letter">${letters[i] || String(i + 1)}</span>
          <span class="quiz-option__text">${escapeHTML(opt)}</span>
        </button>
      `).join('')}
    </div>
    <div class="quiz-feedback" hidden></div>
  `;

  panelBody.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index, 10)));
  });
}

function handleAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];
  const isCorrect = selectedIndex === q.correct;
  if (isCorrect) score++;

  const buttons = panelBody.querySelectorAll('.quiz-option');

  // Immediately mark selected button
  if (buttons[selectedIndex]) {
    buttons[selectedIndex].classList.add('quiz-option--selected');
  }

  // After short delay, reveal correct/wrong states
  setTimeout(() => {
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('quiz-option--correct');
      else if (i === selectedIndex && !isCorrect) btn.classList.add('quiz-option--wrong');
    });

    const feedback = panelBody.querySelector('.quiz-feedback');
    feedback.hidden = false;
    feedback.className = `quiz-feedback quiz-feedback--${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? '&#10003; Correct!' : '&#10007; Not quite.'}</strong>
      <p>${escapeHTML(q.explanation)}</p>
      <button class="quiz-next-btn">${currentIndex + 1 < currentQuestions.length ? 'Next Question &#8594;' : 'See Score &#8594;'}</button>
    `;

    feedback.querySelector('.quiz-next-btn').addEventListener('click', () => {
      currentIndex++;
      renderQuestion();
    });
  }, 300);
}

function renderScore() {
  const total = currentQuestions.length;
  const pct = Math.round((score / total) * 100);
  let message;
  if (pct === 100) message = 'Perfect score! Outstanding!';
  else if (pct >= 67) message = 'Great job! You know your stuff.';
  else if (pct >= 34) message = 'Good effort! Review the topic to improve.';
  else message = 'Keep exploring — you\'ll get there!';

  // Set progress bar to 100% on completion
  if (progressFill) progressFill.style.width = '100%';

  panelBody.innerHTML = `
    <div class="quiz-score-card">
      <div class="quiz-score__ring" style="--score-pct: ${pct}">
        <span class="quiz-score__number">${score}/${total}</span>
        <span class="quiz-score__pct">${pct}%</span>
      </div>
      <p class="quiz-score__message">${escapeHTML(message)}</p>
      <div class="quiz-score__actions">
        <button class="quiz-retry-btn">Try Again</button>
        <button class="quiz-done-btn">Done</button>
      </div>
    </div>
  `;

  panelBody.querySelector('.quiz-retry-btn').addEventListener('click', () => openQuiz(currentSectionId, currentLevel));
  panelBody.querySelector('.quiz-done-btn').addEventListener('click', closeQuiz);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
