const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-btn]');
const mobileNav = header?.querySelector('.desktop-nav');

if (header && menuButton && mobileNav) {
  if (!mobileNav.id) mobileNav.id = 'main-navigation';

  menuButton.setAttribute('aria-controls', mobileNav.id);
  menuButton.setAttribute('aria-expanded', 'false');

  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Открыть меню');
    menuButton.textContent = '☰';
  };

  menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
  });
}
