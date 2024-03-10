import openPopup from '../../../js/module/popup.js';
import sendForm from '../../../js/module/sendForm.js';
import { productData } from './product-data.js';

const openProductBtns = document.querySelectorAll('.btn_product')
const productInfo = document.querySelector('#popup-product .product-info')

openProductBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      let currentIDBtn = btn.dataset.id
      productInfo.innerHTML = ''

      if (currentIDBtn) {
         let currentProduct = productData.find(item => item.id == currentIDBtn)
         
         if (currentProduct) 
            productInfo.insertAdjacentHTML('afterbegin', currentProduct.content)
         
      }
   })
})

new openPopup({
   popup: '#popup-product',
   open: '.btn_product',
   close: '#popup-product .ui-close',
   overlay: '#popup-product .popup-overlay',
})


document.getElementById('product-form').addEventListener('submit', async function (e) {
   e.preventDefault();
   await sendForm(this)
});