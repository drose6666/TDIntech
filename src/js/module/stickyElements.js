// TODO Sticky elements
window.addEventListener('load', () => {
   fadeInNavOnScroll('.sticky', 30)
})

window.addEventListener('scroll', () => {
   fadeInNavOnScroll('.sticky', 30)
})


function fadeInNavOnScroll(elements, distance) {
   let items = document?.querySelectorAll(elements)

   for (let i = 0; i < items.length; i++) {
      if (window.scrollY >= distance) 
         items[i].classList.add('active')
      
      if (window.scrollY <= distance)
         items[i].classList.remove('active')
   }
}