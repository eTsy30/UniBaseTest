const PHONE_LENGTH = 16

function openModal() {
  const modal = document.getElementById('modal')
  modal.style.display = 'block'
}

function closeModal(event) {
  const modal = document.getElementById('modal')
  if (event.target !== event.currentTarget) {
    return
  }
  modal.style.display = 'none'
}

const modal = document.getElementById('modal')

document.getElementById('open-modal').addEventListener('click', openModal)

document
  .querySelector('.modal-form')
  .addEventListener('submit', function (event) {
    const name = document.querySelector(
      ".modal-input[name='organisation']"
    ).value
    const email = document.querySelector(".modal-input[name='email']").value
    const phone = document.querySelector("input[name='phone']").value

    if (name === '' || email === '' || phone.length !== PHONE_LENGTH) {
      event.preventDefault()
      alert('Пожалуйста, заполните все поля формы')
    }
  })

const form = document.querySelector('.modal-form')
const requiredInputs = document.querySelectorAll(
  '.modal-form .form-input-container input'
)
const select = document.querySelector('.modal-form .form-select')
const submitButton = document.querySelector('.modal-form .modal-button')
const socialInputs = document.querySelectorAll('.input-sotial')

function checkFormValidity() {
  let isValid = true

  requiredInputs.forEach((input) => {
    if (input.name === 'phone') {
      if (input.value.length !== PHONE_LENGTH) {
        input.classList.add('invalid')
        input.parentNode.querySelector('.form-input-span').style.display =
          'inline'
      } else {
        input.classList.remove('invalid')
        input.parentNode.querySelector('.form-input-span').style.display =
          'none'
      }
    } else if (input.name === 'email') {
      if (!validateEmail(input.value.trim())) {
        input.classList.add('invalid')
        input.parentNode.querySelector('.form-input-span').style.display =
          'inline'
      } else {
        input.classList.remove('invalid')
        input.parentNode.querySelector('.form-input-span').style.display =
          'none'
      }
    } else {
      if (input.value.trim() === '') {
        input.classList.add('invalid')
        input.parentNode.querySelector('.form-input-span').style.display =
          'inline'
      } else {
        input.classList.remove('invalid')
        input.parentNode.querySelector('.form-input-span').style.display =
          'none'
      }
    }
  })

  socialInputs.forEach((input) => {
    if (!validateSocialURL(input.value.trim())) {
      input.classList.add('invalid')
      input.parentNode.classList.add('parent-invalid')
    } else {
      input.classList.remove('invalid')
      input.parentNode.classList.remove('parent-invalid')
    }
  })

  const error = []
  const allInputs = document.querySelectorAll('input')

  allInputs.forEach((input) => {
    if (input.classList.contains('invalid')) {
      error.push(input)
    }
  })
  if (select.value === '') {
    select.classList.add('invalid')
    select.parentNode.querySelector('.form-input-span').style.display = 'inline'
  } else {
    select.classList.remove('invalid')
    select.parentNode.querySelector('.form-input-span').style.display = 'none'
  }

  isValid = error.length === 0 && !select.classList.contains('invalid')
  submitButton.disabled = !isValid
  form.disabled = !isValid
}
select.addEventListener('change', checkFormValidity)

requiredInputs.forEach((input) => {
  input.addEventListener('input', () => {
    checkFormValidity()

    if (input.name !== 'phone' && input.name !== 'email') {
      if (input.value.trim() === '') {
        input.classList.add('invalid')
        parentElement.querySelector('.form-input-span').style.display = 'inline'
      } else {
        input.classList.remove('invalid')
        parentElement.querySelector('.form-input-span').style.display = 'none'
      }
    }
  })
})

socialInputs.forEach((input) => {
  input.addEventListener('input', checkFormValidity)
})

const element = document.getElementById('phone')
const maskOptions = {
  mask: '+{7}(000)000-00-00',
}
const mask = IMask(element, maskOptions)

function loadAvatar() {
  const avatarInput = document.getElementById('avatarInput')
  const avatarPreview = document.getElementById('avatarPreview')

  avatarInput.addEventListener('change', function (event) {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = function (e) {
        avatarPreview.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  })
}

const avatarInput = document.getElementById('avatarInput')
const avatarPreview = document.getElementById('formImageSide')
avatarPreview.addEventListener('click', () => {
  avatarInput.click()
})

avatarInput.addEventListener('change', function (event) {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = function (e) {
      avatarPreview.style.backgroundImage = `url(${e.target.result})`
      avatarPreview.style.backgroundSize = 'cover'
    }
    reader.readAsDataURL(file)
  }
})

const closeButton = document.getElementById('avatar-close_button')
closeButton.addEventListener('click', () => {
  avatarPreview.style.backgroundImage =
    'url(https://yt3.googleusercontent.com/ytc/AOPolaR7Okd2LhSOKGsNnwMn3-FIbU4PzJtxEpT4ieEJ=s900-c-k-c0x00ffffff-no-rj)'
  avatarPreview.style.backgroundSize = 'cover'
})

function validateSocialURL(input) {
  const socialURLRegex =
    /^(https?:\/\/)?(www\.)?(avc\.ru|(vk|ok|facebook|instagram|youtube)\.com\/[a-zA-Z0-9_]+)(\/\S*)?$/i
  return input.length === 0 ? true : socialURLRegex.test(input)
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

checkFormValidity()
