import openPopup from '../../../js/module/popup.js';
import '../../forms/call-form/call-form.js';

new openPopup({
   popup: '#popup-call',
   open: '.open_call',
   close: '#popup-call .ui-close',
   overlay: '#popup-call .popup-overlay',
})