// The starting theme is set by the small inline script in each page's <head>.
// It has to run before the CSS paints, otherwise you see a white flash first.
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

// The button says what it will switch you to, not what you're currently on.
function updateToggleLabel() {
  toggle.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}

toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateToggleLabel();
});

updateToggleLabel();

document.getElementById('year').textContent = new Date().getFullYear();
