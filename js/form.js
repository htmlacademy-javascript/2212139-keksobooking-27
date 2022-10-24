import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { pristine } from './validate.js';
import { resetFilters } from './filter.js';
import { getAddress, resetMainMarker } from './map.js';
import { pictureReset } from './picture.js';

const mapForm = document.querySelector('.map__filters');
const advertForm = document.querySelector('.ad-form');
const advertFormElements = document.querySelectorAll('select.map__filter, fieldset');
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = advertForm.querySelector('.ad-form__submit');

const switchStateElement = () => {
  advertFormElements.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const switchPageMode = () => {
  advertForm.classList.toggle('ad-form--disabled');
  mapForm.classList.toggle('map__filters--disabled');
  switchStateElement();
};

const resetForm = (form) => {
  form.reset();
  resetFilters();
  getAddress();
  resetMainMarker();
  pictureReset();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm(advertForm);
});

const formSubmit = (form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      submitButton.disabled = true;
      sendData(new FormData(evt.target), showSuccessMessage, showErrorMessage);
      submitButton.disabled = false;
      resetForm(advertForm);
    }
  });
};

export { switchPageMode, formSubmit, resetForm, advertForm };
