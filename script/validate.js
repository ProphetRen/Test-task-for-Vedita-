export function validate() {
  const nameInput = document.querySelectorAll('.form-name')
  const phoneInput = document.querySelectorAll('.form-phone')
  const emailInput = document.querySelectorAll('.form-email')
  const cityInput = document.querySelectorAll('.form-city')
  const buttonSubmit = document.querySelectorAll('.form-button-submit')

  let nameAndCityRegExp = /^[a-zA-Zа-яА-Я]+$/
  let phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  let emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  for (let i = 0; i < buttonSubmit.length; i++) {
    buttonSubmit[i].addEventListener('click', () => {
      let nameValid = validateName(nameInput[i])
      let phoneValid = validatePhone(phoneInput[i])
      let emailValid = validateEmail(emailInput[i])
      let cityValid = validateCity(cityInput[i])

      if (nameValid && phoneValid && emailValid && cityValid) {
        buttonSubmit[i].setAttribute('type', 'reset')
      }

      phoneInput[i].addEventListener('input', () => {
        phoneInput[i].classList.remove('error')
      })
      emailInput[i].addEventListener('input', () => {
        emailInput[i].classList.remove('error')
      })
      nameInput[i].addEventListener('input', () => {
        nameInput[i].classList.remove('error')
      })
      cityInput[i].addEventListener('input', () => {
        cityInput[i].classList.remove('error')
      })
    })
  }

  function validateName(nameInput) {
    const valid = nameInput.value.match(nameAndCityRegExp)

    if (valid !== null && nameInput.value.length > 1) {
      nameInput.classList.remove('error')
      return true
    } else {
      nameInput.classList.add('error')
      return false
    }
  }

  function validatePhone(phoneInput) {
    const valid = phoneInput.value.match(phoneRegExp)

    if (valid !== null) {
      phoneInput.classList.remove('error')
      return true
    } else {
      phoneInput.classList.add('error')
      return false
    }
  }

  function validateEmail(emailInput) {
    const valid = emailInput.value.match(emailRegExp)

    if (valid !== null) {
      emailInput.classList.remove('error')
      return true
    } else {
      emailInput.classList.add('error')
      return false
    }
  }

  function validateCity(cityInput) {
    const valid = cityInput.value.match(nameAndCityRegExp)

    if (valid !== null && cityInput.value.length > 1) {
      cityInput.classList.remove('error')
      return true
    } else {
      cityInput.classList.add('error')
      return false
    }
  }
}