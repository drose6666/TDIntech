const preloader = document.getElementById('preloader')

window.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      preloader.classList.add('hide')
   }, 300)
})

