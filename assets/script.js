// Lightweight navigation helpers and keyboard support.
// Ensures arrow keys can move between pages and prevents accidental scroll.

(() => {
  // Keyboard navigation: Left = previous, Right = next
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const next = document.querySelector('.btn-next');
      if (next) next.click();
    } else if (e.key === 'ArrowLeft') {
      const prev = document.querySelector('.btn-prev');
      if (prev) prev.click();
    }
  });

  // Prevent wheel scroll / touchmove from moving the page
  const prevent = (ev) => { ev.preventDefault(); };
  window.addEventListener('wheel', prevent, { passive: false });
  window.addEventListener('touchmove', prevent, { passive: false });

  // Ensure images that don't exist don't break layout (optional: keeps placeholders visible)
  window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', () => {
        img.style.opacity = 0.02;
        img.style.filter = 'grayscale(100%)';
        img.alt += ' (image not found — replace file in assets)';
      });
    });
  });
})();