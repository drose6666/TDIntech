window.addEventListener('load', () => {
   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
   }

   const callback = (entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animation')
         }
      })
   }

   const observer = new IntersectionObserver(callback, options)
   const animateList = document.querySelectorAll('.animate')

   animateList?.forEach(i => {
      observer.observe(i)
   })
})