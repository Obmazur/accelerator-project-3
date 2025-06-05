const telField = document.querySelector('.modal__field--tel');

const maskOptions = {
  mask: '+7 (000) 000-00-00'
};

const mask = IMask(telField, maskOptions);
