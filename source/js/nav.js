const navMainElement = document.querySelector('.header__nav');
const navToggleElement = document.querySelector('.js-toggle-button');
const pageElement = document.querySelector('.page__body');
const menuElement = document.querySelector('.header__list');
const overlayElement = document.querySelector('.page__overlay');

const toggleMenu = (button) => {
  button.classList.toggle('header__nav--is-closed');
  button.classList.toggle('header__nav--is-open');
  pageElement.classList.toggle('page__body--menu-is-open');
};

const initToggle = () => {
  navToggleElement.addEventListener('click', () => {
    toggleMenu(navMainElement);
  });

  menuElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.header__link') && !evt.target.matches('.header__link--button')) {
      toggleMenu(navMainElement);
    }
  });

  overlayElement.addEventListener('click', () => {
    toggleMenu(navMainElement);
  });
};

export {initToggle};

const submenuElements = document.querySelectorAll('.header__item--js');

const initSubmenu = () => {
  submenuElements.forEach((menu) => {
    menu.addEventListener('click', (evt) => {
      if (evt.target.matches('.header__link--button')) {
        menu.classList.toggle('header__item--open');
        evt.target.classList.toggle('header__link--active');
      }
    });
  });
};

initSubmenu();
