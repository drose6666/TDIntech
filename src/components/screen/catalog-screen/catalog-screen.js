import Swiper from 'swiper/bundle';

const catalogSwiper = new Swiper('#catalog-swiper', {
   slidesPerView: 3,
   slidesPerGroup: 1,
   loop: true,
   spaceBetween: 20,
   speed: 300,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   breakpoints: {
      120: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      700: {
         slidesPerView: 2,
         spaceBetween: 20,
         slidesPerGroup: 1
      },
      1150: {
         slidesPerView: 3,
         spaceBetween: 20,
         slidesPerGroup: 1
      }
   }
})