import { priceFieldElement, validatePrice, getPriceErrorMessage, updatePlaceHolder } from './price.js';
import {
  guestsField, roomsField, validateRoomsAndCapacity,
  getRoomsErrorMessage, getCapacityErrorMessage
} from './room.js';

const advertFormElement = document.querySelector('.ad-form');
const title = advertFormElement.querySelector('#title');
const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');

// создаем экземпляр валидатора
const pristine = new Pristine(advertFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
}, true);

//  функция проверки "Заголовок объявления"
function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}
// принудительная синхронизация полей время заезда-выезда
const validateTimeIn = () => {
  timeOutField.value = timeInField.value;
  return true;
};
// принудительная синхронизация полей время заезда-выезда
const validateTimeOut = () => {
  timeInField.value = timeOutField.value;
  return true;
};

pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);
pristine.addValidator(roomsField, validateRoomsAndCapacity, getRoomsErrorMessage);
pristine.addValidator(guestsField, validateRoomsAndCapacity, getCapacityErrorMessage);
pristine.addValidator(timeInField, validateTimeIn);
pristine.addValidator(timeOutField, validateTimeOut);
pristine.addValidator(title, validateTitle);

advertFormElement.addEventListener('change', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
  updatePlaceHolder(priceFieldElement);
});

// событие, по которому происходит проверка формы
advertFormElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

export { pristine };
