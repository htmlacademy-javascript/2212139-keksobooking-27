import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { pristine } from './validate.js';
import { resetFilters } from './filter.js';
import { getAddress, resetMainMarker } from './map.js';
import { pictureReset } from './picture.js';
import { updatePlaceHolder, priceFieldElement } from './price.js';

const mapFormElement = document.querySelector('.map__filters');
const advertFormElement = document.querySelector('.ad-form');
const advertFormElements = document.querySelectorAll('select.map__filter, fieldset');
const resetButtonElement = document.querySelector('.ad-form__reset');
const submitButtonElement = advertFormElement.querySelector('.ad-form__submit');

const switchStateElement = () => {
  advertFormElements.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const switchPageMode = () => {
  advertFormElement.classList.toggle('ad-form--disabled');
  mapFormElement.classList.toggle('map__filters--disabled');
  switchStateElement();
};

const resetForm = (form) => {
  form.reset();
  resetFilters();
  getAddress();
  resetMainMarker();
  pictureReset();
  updatePlaceHolder(priceFieldElement);
};

resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm(advertFormElement);
});

const formSubmit = (form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      submitButtonElement.disabled = true;
      sendData(new FormData(evt.target), showSuccessMessage, showErrorMessage);
      submitButtonElement.disabled = false;
      resetForm(advertFormElement);
    }
  });
};

export { switchPageMode, formSubmit, resetForm, advertFormElement };
