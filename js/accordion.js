document.querySelectorAll('[data-accordion], [data-accordion="single"]').forEach((root) => {
  const single = root.dataset.accordion === 'single';
  root.querySelectorAll('article').forEach((item) => {
    const btn = item.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (single) {
        root.querySelectorAll('article').forEach((other) => {
          if (other !== item) other.classList.remove('is-open');
        });
      }
      item.classList.toggle('is-open');
    });
  });
});
