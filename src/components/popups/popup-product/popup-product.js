import openPopup from '../../../js/module/popup.js';
import sendForm from '../../../js/module/sendForm.js';
import { productData } from './product-data.js';

const openProductBtns = document.querySelectorAll('.open_product')
const productInfo = document.querySelector('#popup-product .product-info')
const productHiddenField = document.querySelector('#product-form [type="hidden"]')

openProductBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      let currentIDBtn = btn.dataset.id
      productInfo.innerHTML = ''
      productHiddenField.value = ''

      if (currentIDBtn) {
         let currentProduct = productData.find(item => item.id == currentIDBtn)
         
         if (currentProduct) {
            productInfo.insertAdjacentHTML('afterbegin', currentProduct.content)
            productHiddenField.value = `Сообщение по товару ${currentProduct.title}`
         }
      }
   })
})

new openPopup({
   popup: '#popup-product',
   open: '.open_product',
   close: '#popup-product .ui-close',
   overlay: '#popup-product .popup-overlay',
})


document.getElementById('product-form').addEventListener('submit', async function (e) {
   e.preventDefault();
   await sendForm(this)
});