import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { pristine } from './validate.js';
import { resetFilters } from './filter.js';
import { getAddress, resetMainMarker } from './map.js';
import { pictureReset } from './picture.js';
import { updatePlaceHolder, priceFieldElement } from './price.js';

const mapFormElement = document.querySelector('.map__filters');
const mapCanvasElement = document.querySelector('#map-canvas');
const advertFormElement = document.querySelector('.ad-form');
const advertFormElements = document.querySelectorAll('select.map__filter, fieldset');
const resetButtonElement = document.querySelector('.ad-form__reset');
const submitButtonElement = advertFormElement.querySelector('.ad-form__submit');

const switchStateElement = (flag) => {
  if (!flag) {
    advertFormElements.forEach((element) => {
      element.disabled = true;
    });
  } else {
    advertFormElements.forEach((element) => {
      element.disabled = false;
    });
  }
};

const switchPageMode = (flag) => {
  if (!flag) {
    advertFormElement.classList.add('ad-form--disabled');
    mapFormElement.classList.add('map__filters--disabled');
    mapCanvasElement.classList.add('map__canvas--disabled');
  } else {
    advertFormElement.classList.remove('ad-form--disabled');
    mapFormElement.classList.remove('map__filters--disabled');
    mapCanvasElement.classList.remove('map__canvas--disabled');
  }
  switchStateElement(flag);
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
