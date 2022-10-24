import { priceField, validatePrice, getPriceErrorMessage } from './price.js';
import {
  guestsField, roomsField, validateRoomsAndCapacity,
  getRoomsErrorMessage, getCapacityErrorMessage
} from './room.js';


const advertForm = document.querySelector('.ad-form');
const title = advertForm.querySelector('#title');
const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');

// создаем экземпляр валидатора
const pristine = new Pristine(advertForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
});

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

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);
pristine.addValidator(roomsField, validateRoomsAndCapacity, getRoomsErrorMessage);
pristine.addValidator(guestsField, validateRoomsAndCapacity, getCapacityErrorMessage);
pristine.addValidator(timeInField, validateTimeIn);
pristine.addValidator(timeOutField, validateTimeOut);
pristine.addValidator(title, validateTitle, 'От 30 до 100 символов');

advertForm.addEventListener('change', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

// событие, по которому происходит проверка формы
advertForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});


export { pristine };

