'use strict';
const documentReady = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const menuIconContainer = document.getElementById('menuIconContainer');
  const menuCloseIconContainer = document.getElementById('menuCloseIconContainer');

  const headerNavMenuList = document.querySelector('.header-nav__menu-list');
  const headerNavMenuLinks = [...document.querySelectorAll('.header-nav__menu-link')];

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
  };

  const openMenu = () => {
    headerNavMenuList.classList.add('header-nav__menu-list--open');
  };

  const closeMenu = () => {
    headerNavMenuList.classList.remove('header-nav__menu-list--open');
  };

  document.addEventListener('scroll', documentScroll);
  menuIconContainer.addEventListener('click', openMenu);
  menuCloseIconContainer.addEventListener('click', closeMenu);
  headerNavMenuLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
};

document.addEventListener('DOMContentLoaded', documentReady);