import Swiper from 'swiper/bundle';

new Swiper('#reviews-swiper', {
   slidesPerView: 2,
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
      nextEl: '.swiper-arrow.next',
      prevEl: '.swiper-arrow.prev'
   },
   breakpoints: {
      120: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      800: {
         slidesPerView: 2,
         spaceBetween: 20,
         slidesPerGroup: 1
      },
   }
})


const reviewText = document.querySelectorAll('#reviews-swiper .review__text')
const fullTextReviews = []

reviewText.forEach((item, index) => {
   let text = item.innerText
   fullTextReviews.push({ id: index + 1, text })

   item.innerText = textMofified(text, 330)
})


function textMofified(text, maxLength) {
   if (text.length > maxLength) 
      return text.slice(0, maxLength) + '...'
   return text
}