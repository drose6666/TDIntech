let scrollUpArrow = document.querySelector('.ui-scrollUp')
scrollUpArrow.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
})