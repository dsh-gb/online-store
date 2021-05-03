'use strict';

let burger = document.querySelector('.header__menu-button');
let menu = document.querySelector('.header__navigation');
let menuExit = document.querySelector('.header__navigation-exit');

burger.addEventListener("click", () => {
    if (menu.style.display !== 'block') menu.style.display = 'block';
    else menu.style.display = 'none'
});

menuExit.addEventListener("click", () => menu.style.display = 'none');
