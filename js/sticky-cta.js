const hero = document.querySelector('[data-hero]');
const sticky = document.querySelector('[data-sticky-cta]');
if (hero && sticky && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0.05 });
  observer.observe(hero);
}

document.querySelectorAll('[data-tier]').forEach((link) => {
  link.addEventListener('click', () => {
    const value = link.dataset.tier || 'preorder';
    const input = document.querySelector('[data-lead-type]');
    if (input) input.value = value;
  });
});
