import openPopup from '../../../js/module/popup.js';
import { reviewData } from './review-data.js';

const showFullreview = document.querySelectorAll('.review .read-more')
const popupreviewContainer = document.querySelector('.popup-review')

showFullreview.forEach(item => {
   item.addEventListener('click', () => {
      let currentBtnId = item.dataset.id
      popupreviewContainer.innerHTML = ''

      if (currentBtnId) {
         let currentReview = reviewData.find(item => item.id == currentBtnId)

         if (currentReview) {
            popupreviewContainer.insertAdjacentHTML('afterbegin', createReviewTemplate(currentReview))
         }
      }
   })
})

new openPopup({
   popup: '#popup-review',
   open: '.open_review',
   close: '#popup-review .ui-close',
   overlay: '#popup-review .popup-overlay',
})

function createReviewTemplate (item) {
   const { id, title, review, author } = item

   return `
      <div class="review">
         <h5 class="review__title">${title}</h5>
         <div class="review__text-wrap">
            <p class="review__text ui-text">${review}</p>
         </div>

         <div class="author">
            <div class="author__img">
               <img src="assets/img/reviews/avatar_${id}.webp" alt="${author.name}">
            </div>
            <div class="author__details">
               <h6 class="author__name">${author.name}</h6>
               <span class="author__position">${author.position}</span>
            </div>
         </div>
      </div>
   `
}