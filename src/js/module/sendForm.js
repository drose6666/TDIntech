export default async function sendForm(form) {
   const statusMessage = form.querySelector('.message-status');

   try {
      const isValid = validateForm(form);
      if (isValid) {
      
         const phpHandlerUrl = "assets/libs/telegram.php";

         const response = await fetch(phpHandlerUrl, {
         method: "POST",
         body: new FormData(form),
         });

         if (response.ok) {
            for (let item of document.querySelectorAll('.form .ui-field')) {
					item.value = ''
				}
            statusMessage.classList.add('success')
            statusMessage.innerText = 'Данные успешно отправлены'
         } else {
            statusMessage.classList.add('error')
            statusMessage.innerText = 'Ошибка. Форма не отправлена'
         }
      }
   } catch (error) {
      statusMessage.classList.add('error')
      statusMessage.innerText = 'Ошибка. Форма не отправлена'
   }
}

function validateForm(form) {
   const inputs = form.querySelectorAll("input, textarea");
   let isFormValid = true;

   clearErrors(form);

   inputs.forEach((input) => {
      const type = input.dataset.type;
      const isRequired = input.hasAttribute("data-required");
      const value = input.value.trim();
      const errorMessage = input.nextElementSibling;
      const parentInputEl = input.parentNode;

      switch (type) {
         case "name":
            if (isRequired) {
               if (value === "" || !validateName(value)) {
                  onError(errorMessage, parentInputEl, "Введите корректное имя");
                  isFormValid = false;
               } else {
                  onSuccess(errorMessage, parentInputEl);
               }
            }
            break;

         case "tel":
            if (isRequired) {
               if (value === "" || !validatePhone(value)) {
                  onError(errorMessage, parentInputEl, "Введите корректный номер телефона");
                  isFormValid = false;
               } else {
                  onSuccess(errorMessage, parentInputEl);
               }
            }
            break;

         case "email":
            if (isRequired) {
               if (value === "" || !validateEmail(value)) {
                  onError(errorMessage, parentInputEl, "Введите корректный Email");
                  isFormValid = false;
               } else {
                  onSuccess(errorMessage, parentInputEl);
               }
            }
            break;

         case "message":
            if (isRequired) {
               if (value === "" || !validateMessage(value)) {
                  onError(errorMessage, parentInputEl, "Это поле тоже нужно заполнить");
                  isFormValid = false;
               } else {
                  onSuccess(errorMessage, parentInputEl);
               }
            }
            break;

         default:
            break;
      }

      // Добавим обработчик события focus, чтобы скрыть сообщение об ошибке при фокусировке на поле
      input.addEventListener("focus", () => {
         clearErrorsForInput(input);
      });
   });

   return isFormValid;
}

function validateName(name) {
   const nameRegex = /^[a-zA-Zа-яА-ЯёЁ.\s-]+$/;
   return nameRegex.test(name);
}

function validatePhone(phone) {
   const phoneRegex = /^(\s*)?(\+)?([- _():+]?\d[- _():+]?){11,14}(\s*)?$/;
   return phoneRegex.test(phone);
}

function validateEmail(email) {
   const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return emailRegex.test(email);
}

function validateMessage(message) {
   return message.length <= 3000;
}

function onError(element, parentEl, message) {
   parentEl.classList.add("error");
   element.textContent = message;
}

function onSuccess(element, parentEl) {
   parentEl.classList.remove("error");
   element.textContent = "";
}

function clearErrors(form) {
   const errorMessages = form.querySelectorAll(".error-message");
   errorMessages.forEach((message) => (message.textContent = ""));
}

function clearErrorsForInput(input) {
   const errorMessage = input.nextElementSibling;
   errorMessage.textContent = "";
   input.parentNode.classList.remove("error");
}