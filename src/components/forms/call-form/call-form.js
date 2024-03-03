import sendForm from '../../../js/module/sendForm.js';

document.getElementById('call-form').addEventListener('submit', async function (e) {
   e.preventDefault();
   await sendForm(this)
});