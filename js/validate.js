
// для добавления на форму стороннего валидатора
const advertForm = document.querySelector('.ad-form');

// создаем экземпляр валидатора
const pristine = new Pristine(advertForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__label',
  errorTextTag: 'fieldset',
  errorTextClass: 'error__message'
});

// вынесенная функция проверки "Заголовок объявления"
function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

// добавление поля "Заголовок объявления" для проверки валидатором
pristine.addValidator(advertForm.querySelector('#title'),
  validateTitle, 'От 30 до 100 символов');

// добавление проверки поля "Цена за ночь"
const priceField = document.querySelector('#price');
pristine.addValidator(priceField, validatePrice, 'Не больше 100000');
function validatePrice(value) {
  return value < 100000;
}

// добавление проверки полей "Количесво комнат" и "Количество мест"
const roomsField = document.querySelector('[name="rooms"]');
const capacityField = document.querySelector('[name="capacity"]');

// объект для создания логики проверки комнат-мест
const roomsOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

function validateRoomsAndCapacity() {
  return roomsOption[roomsField.value].includes(capacityField.value);
}

pristine.addValidator(roomsField, validateRoomsAndCapacity);
pristine.addValidator(capacityField, validateRoomsAndCapacity);

// событие, по котору происходит проверка формы
advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
