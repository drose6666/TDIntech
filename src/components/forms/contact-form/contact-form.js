import sendForm from '../../../js/module/sendForm.js';

document.getElementById('contact-form').addEventListener('submit', async function (e) {
   e.preventDefault();
   await sendForm(this)
});