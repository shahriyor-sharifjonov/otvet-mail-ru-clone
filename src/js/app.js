import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

import $ from 'jquery';

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});

document.querySelector('.drop').addEventListener('click', e => {
  e.target.classList.toggle('active');
})
document.addEventListener('click', e => {
  if(document.querySelector('.drop.active') && !e.composedPath().includes(document.querySelector('.drop-container')) && !e.composedPath().includes(document.querySelector('.drop-container'))){
    document.querySelector('.drop.active').classList.remove('active');
  }
})
document.querySelectorAll('.drop__link').forEach(el => {
  el.addEventListener('click', ( ) => {
    el.parentElement.parentElement.previousElementSibling.classList.remove('active');
  })
})


document.querySelectorAll('.dropdown').forEach(el => {
  const btn = el.querySelector('.dropdown__btn');
  const content = el.querySelector('.dropdown__content');
  const link = el.querySelectorAll('.dropdown__item');
  btn.addEventListener('click', () => {
    content.classList.toggle('active');
  })
  document.addEventListener('click', e => {
    if(!e.composedPath().includes(el) && !e.composedPath().includes(el)){
      content.classList.remove('active');
    }
  })
  link.forEach(item => {
    item.addEventListener('click', e => {
      content.classList.remove('active');
    })
  })
})