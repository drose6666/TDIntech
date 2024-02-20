export default class openPopup {
   constructor ({ popup, open = null, openFlag = false, close, closeItem = null, overlay = null, whereInsert = null, frame = null }) {
      this.$popup = document.querySelector(popup)
      this.$openBtn = document.querySelectorAll(open)
      this.$closeBtn = document.querySelector(close)
      this.$closeItem = document.querySelectorAll(closeItem)
      this.$overlay = document.querySelector(overlay)
      this.$whereInsert = document.querySelector(whereInsert)
      this.frame = frame
      this.openFlag = openFlag
      

      this.#setup()  
   }

   #setup = () => {
      this.message = document.querySelector('.form-wrap .message-status')
      if (this.$openBtn) {
         for (let i = 0; i < this.$openBtn.length; i++) {
            this.$openBtn[i].addEventListener('click', this.onOpen)
         }
      }

      this.openFlag ? this.onOpen() : this.onClose()
      
      this.$overlay?.addEventListener('click', this.onClose)
      this.$closeBtn?.addEventListener('click', this.onClose)
      this.$closeItem?.forEach(el => {
         el.addEventListener('click', () => {
            this.onClose()
         })
      })
      document.body.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.onClose()
      })
   }

   onOpen = () => {
      this.$popup.classList.add('active')
      document.body.classList.add('no-scroll')

      this.openFlag = true
 
      if (this.frame) {
         this.insertIframe()
      }
   }

   onClose = () => {
      this.$popup?.classList.remove('active')
      document.body.classList.remove('no-scroll')
      this.openFlag = false
      if (this.message) {
         this.message.classList.remove('success')
         this.message.classList.remove('error')
      }

      if (this.frame) {
         this.deleteFrame()
      }
   }

   insertIframe = () => { 
      this.$whereInsert.insertAdjacentHTML('afterbegin', this.frame)
   }

   deleteFrame = () => {
      if (this.$whereInsert?.querySelector('iframe'))
         this.$whereInsert.querySelector('iframe').remove()
   }
}