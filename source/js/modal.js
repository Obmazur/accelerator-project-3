const modal = document.querySelector('.modal');
const modalToggle = document.querySelectorAll('.js-modal-toggle');
const modalOverlay = modal.querySelector('.modal__overlay');
const pageElement = document.querySelector('.page__body');
const formElement = document.querySelector('.modal__form');
const formFieldElements = formElement.querySelectorAll('.modal__field');
const checkboxElement = formElement.querySelector('.modal__input');
const submitButtonElement = formElement.querySelector('.js-modal-submit');
let invalidFields;

const toggleModal = () => {
  modal.classList.toggle('modal--is-closed');
  modal.classList.toggle('modal--is-open');
  pageElement.classList.toggle('page__body--modal-is-open');
};

modalToggle.forEach((button) => {
  button.addEventListener('click', toggleModal);
});

modalOverlay.addEventListener('click', toggleModal);

const getFormData = (form) => new FormData(form);

async function sendData(data) {
  return await fetch('https://echo.htmlacademy.ru/',
    {method: 'POST',
      body: data,}
  );
}

async function handleFormSubmit() {
  const data = getFormData(formElement);
  sendData(data);

  toggleModal();
}

async function markInvalid() {
  invalidFields = formElement.querySelectorAll('.modal__field:invalid');
  invalidFields.forEach((field) => {
    field.classList.add('modal__field--invalid');
  });
  formElement.querySelector('.modal__input:invalid + .modal__mark').classList.add('modal__mark--invalid');
}

submitButtonElement.addEventListener('click', markInvalid);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleFormSubmit();
});

formFieldElements.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.classList.remove('modal__field--invalid');
  });
});

checkboxElement.addEventListener('click', () => {
  formElement.querySelector('.modal__label--checkbox').classList.toggle('modal__label--checkbox-active');
  formElement.querySelector('.modal__input + .modal__mark').classList.remove('modal__mark--invalid');
});
