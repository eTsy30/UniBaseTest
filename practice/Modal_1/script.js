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
    const name = document.querySelector(".modal-input[name='name']").value
    const email = document.querySelector(".modal-input[name='email']").value
    if (name === '' || email === '') {
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

function checkFormValidity() {
  let isValid = true
  requiredInputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false
      input.classList.add('invalid')
    } else {
      input.classList.remove('invalid')
    }
  })

  if (select.value === '') {
    isValid = false
    select.classList.add('invalid')
  } else {
    select.classList.remove('invalid')
  }

  submitButton.disabled = !isValid
  form.disabled = !isValid
}

requiredInputs.forEach((input) => {
  input.addEventListener('input', checkFormValidity)
})
select.addEventListener('change', checkFormValidity)
const arr = [10, 12, 15, 21]
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}

checkFormValidity()
