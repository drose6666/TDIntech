import MobileMenu from '../../../js/module/mobileMenu.js';

new MobileMenu({
   menu: '.mobile-menu-wrap',
   close: '.mobile-menu-wrap .ui-close',
   open: '.ui-burger',
   overlay: '.ui-overlay',
   closeItems: '.closed'
})