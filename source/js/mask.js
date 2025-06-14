const telField = document.querySelector('.modal__field--tel');
const telFormField = document.querySelector('.form__field--tel');

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "mask" }]*/
/*global IMask*/

const maskOptions = {
  mask: '+7 (000) 000-00-00'
};

const mask = IMask(telField, maskOptions);
const mask2 = IMask(telFormField, maskOptions);
