import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import {enableBullets} from './pagination';

const paginationElement = document.querySelector('.hero__pagination');
let sliderBodyElement;

let heroSwiper;
let programsSwiper;
let newsSwiper;
let reviewsSwiper;

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

  programsSwiper = new Swiper('.programs__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    allowTouchMove: true,
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: '.programs__nav-button--next',
      prevEl: '.programs__nav-button--prev',
    },
    scrollbar: {
      el: '.programs__scrollbar',
      enabled: true,
      hide: false,
      draggable: true,
      dragClass: 'programs__scrollbar--drag',
      dragSize: 326,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.127,
        spaceBetween: 30,
        slidesOffsetAfter: 45,
        allowTouchMove: true,
      },
      1440: {
        slidesOffsetAfter: 0,
        spaceBetween: 32,
        slidesPerView: 3,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 394,
        }
      },
    },
  });

  newsSwiper = new Swiper('.news__swiper', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 1,
    grid: {
      rows: 2,
      fill: 'column',
    },
    spaceBetween: 20,
    navigation: {
      nextEl: '.news__nav-button--next',
      prevEl: '.news__nav-button--prev',
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      bulletClass: 'news__bullet',
      bulletActiveClass: 'news__bullet--active',
      renderBullet: function (index, className) {
        return `<span class="${className}" tabIndex=0>${index + 1}</span>`;
      },
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
    },
  });

  reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: '.reviews__nav-button--next',
      prevEl: '.reviews__nav-button--prev',
    },
    scrollbar: {
      el: '.reviews__scrollbar',
      enabled: true,
      hide: false,
      draggable: true,
      dragClass: 'reviews__scrollbar--drag',
      dragSize: 326,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.276,
        spaceBetween: 30,
        slidesOffsetAfter: 45,
        scrollbar: {
          enabled: true,
        }
      },
      1440: {
        slidesOffsetAfter: 0,
        spaceBetween: 32,
        slidesPerView: 2,
        scrollbar: {
          dragSize: 394,
          enabled: true,
        }
      },
    },
  });
};

window.addEventListener('load', () => {
  initSwipers();
  heroSwiper.init();
  newsSwiper.init();
  programsSwiper.init();
  enableBullets();

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

