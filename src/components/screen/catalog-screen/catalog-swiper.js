import Swiper from 'swiper/bundle';

let swipers = document.querySelectorAll('[id^="catalog-swiper"]')
window.addEventListener('load', setSwipers)

function setSwipers () {
   swipers.forEach((item, index) => {
      let options = setOptions(index+1);

      new Swiper(`#${item.id}`, options)
   });
}

function setOptions (id) {
   return {
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 20,
      speed: 300,
      setWrapperSize: true,
      roundLengths: true,
      autoHeight: false,
      keyboard: {
         enabled: true,
         onlyInViewport: false,
      },
      navigation: {
         nextEl: `.vi-fill-icon.next-${id}`,
         prevEl: `.vi-fill-icon.prev-${id}`
      },
      breakpoints: {
         120: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
         },
         500: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1
         },
      
         1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1
         }
      }
   }
}