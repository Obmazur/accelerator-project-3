const pageElement = document.querySelector('.page__body');
const messageElement = pageElement.querySelector('.message');
const messageToggle = document.querySelector('.js-message-toggle');
const messageOverlay = messageElement.querySelector('.message__overlay');
const formElement = pageElement.querySelector('.form__form');
const formFieldElements = formElement.querySelectorAll('.form__field');
const checkboxElement = formElement.querySelector('.form__input');
const submitButtonElement = formElement.querySelector('.js-form-submit');
let invalidFields;

const toggleMessage = () => {
  messageElement.classList.toggle('message--is-closed');
  messageElement.classList.toggle('message--is-open');
  pageElement.classList.toggle('page__body--modal-is-open');
};

messageToggle.addEventListener('click', toggleMessage);

messageOverlay.addEventListener('click', toggleMessage);

const getFormData = (form) => new FormData(form);

async function sendData(data) {
  return await fetch('https://echo.htmlacademy.ru/',
    {method: 'POST',
      body: data,}
  );
}

async function handleFormSubmit() {
  const data = getFormData(formElement);
  const {status} = await sendData(data);

  if (status === 200) {
    toggleMessage();
  }
}

async function markInvalid() {
  invalidFields = formElement.querySelectorAll('.form__field:invalid');
  invalidFields.forEach((field) => {
    field.classList.add('form__field--invalid');
  });
  formElement.querySelector('.form__input:invalid + .form__mark').classList.add('form__mark--invalid');
}

submitButtonElement.addEventListener('click', markInvalid);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleFormSubmit();
});

formFieldElements.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.classList.remove('form__field--invalid');
  });
});

checkboxElement.addEventListener('click', () => {
  formElement.querySelector('.form__label--checkbox').classList.toggle('form__label--checkbox-active');
  formElement.querySelector('.form__input + .form__mark').classList.remove('form__mark--invalid');
});
