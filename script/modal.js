import {validate} from './validate.js'

export function modal() {
  const customModalWrapper = document.querySelector('.custom-modal-wrapper')
  const customModalContainer = document.querySelector('.custom-modal div')
  const closeButton = document.querySelector('.custom-modal .close')
  const quote = document.querySelector('.quote')
  const headerPrimaryButton = document.querySelector('.header__buttons .button-primary')
  const body = document.querySelector('body')

  let originalForm = null

  headerPrimaryButton.addEventListener('click', showModal)
  closeButton.addEventListener('click', closeModal)

  function showModal() {
    copyToModal()
    validate()

    customModalWrapper.classList.add('show')
    body.classList.add('lock')
  }

  function copyToModal() {
    originalForm = quote.cloneNode(true)
    originalForm.classList.add('pb-md-3')
    originalForm.classList.add('pb-4')

    customModalContainer.append(originalForm)
  }

  function closeModal() {
    originalForm.remove()
    originalForm = null

    customModalWrapper.classList.remove('show')
    body.classList.remove('lock')
  }
}