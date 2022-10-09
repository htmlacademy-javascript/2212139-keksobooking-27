const advertForm = document.querySelector('.ad-form'); // для добавления на форму стороннего валидатора

const pristine = new Pristine(advertForm, { // создаем валидатор
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'error__message'
});

function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(advertForm.querySelector('#title'),
  validateTitle, 'От 30 до 100 символов');

const priceField = document.querySelector('#price');

pristine.addValidator(priceField, validatePrice, 'Не больше 100000');

function validatePrice(value) {
  return value < 100000;
}

const roomsField = document.querySelector('[name="rooms"]');
const capacityField = document.querySelector('[name="capacity"]');

const roomsOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

function validateRoomsAndCapacity() {
  return roomsOption[roomsField.value].includes(capacityField.value);
}

pristine.addValidator(roomsField, validateRoomsAndCapacity);
pristine.addValidator(capacityField, validateRoomsAndCapacity);


advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
