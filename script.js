'use strict';

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__navigation');
let menuExit = document.querySelector('.header__navigation-exit');

burger.addEventListener("click", () => menu.classList.toggle("display-block"));

menuExit.addEventListener("click", () => menu.classList.remove("display-block"));
