import { priceFieldElement, validatePrice, getPriceErrorMessage, updatePlaceHolder } from './price.js';
import {
  guestsFieldElement, roomsFieldElement, validateRoomsAndCapacity,
  getRoomsErrorMessage, getCapacityErrorMessage
} from './room.js';

const advertFormElement = document.querySelector('.ad-form');
const titleElement = advertFormElement.querySelector('#title');
const timeInFieldElement = document.querySelector('#timein');
const timeOutFieldElement = document.querySelector('#timeout');

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
const validateTitle = (value) => value.length >= 30 && value.length <= 100;

// принудительная синхронизация полей время заезда-выезда
const validateTimeIn = () => {
  timeOutFieldElement.value = timeInFieldElement.value;
  return true;
};
// принудительная синхронизация полей время заезда-выезда
const validateTimeOut = () => {
  timeInFieldElement.value = timeOutFieldElement.value;
  return true;
};

pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);
pristine.addValidator(roomsFieldElement, validateRoomsAndCapacity, getRoomsErrorMessage);
pristine.addValidator(guestsFieldElement, validateRoomsAndCapacity, getCapacityErrorMessage);
pristine.addValidator(timeInFieldElement, validateTimeIn);
pristine.addValidator(timeOutFieldElement, validateTimeOut);
pristine.addValidator(titleElement, validateTitle);

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
