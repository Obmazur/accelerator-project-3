import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const paginationElement = document.querySelector('.hero__pagination');
let sliderBodyElement;

let heroSwiper;

const initSwipers = () => {
  heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    modules: [Pagination],
    pagination: {
      clickable: true,
      el: '.hero__pagination',
      bulletActiveClass: 'button--pagination-active',
      bulletClass: 'button--pagination',
      bulletElement: 'button',
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
  });
};

window.addEventListener('load', () => {
  initSwipers();
  heroSwiper.init();

  heroSwiper.on('slideChangeTransitionStart', () => {
    paginationElement.style.opacity = 0;
  });

  heroSwiper.on('slideChangeTransitionEnd', () => {
    sliderBodyElement = document.querySelector('.swiper-slide-active .hero__title');
    if (window.innerWidth >= 768) {
      paginationElement.style.top = `${sliderBodyElement.offsetTop - 40}px`;
    } else {
      paginationElement.style.top = `${sliderBodyElement.offsetTop - 28}px`;
    }
    paginationElement.style.opacity = 1;
  });
});

window.addEventListener('resize', () => {
  sliderBodyElement = document.querySelector('.swiper-slide-active .hero__title');
  if (window.innerWidth >= 768) {
    paginationElement.style.top = `${sliderBodyElement.offsetTop - 40}px`;
  } else {
    paginationElement.style.top = `${sliderBodyElement.offsetTop - 28}px`;
  }
  paginationElement.style.opacity = 1;
});
