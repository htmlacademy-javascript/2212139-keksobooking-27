import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { pristine } from './validate.js';


const map = document.querySelector('.map');
const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('fieldset');
const mapFilters = document.querySelectorAll('.map__filter');
const mapCheckBoxes = document.querySelectorAll('.map__checkbox');
const sliders = advertForm.querySelectorAll('.ad-form__slider');
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = advertForm.querySelector('.ad-form__submit');

const setActivateForm = (elements, isEnabled) => {
  elements.forEach((element) => {
    element.disabled = isEnabled;
  });
};

const setClassForm = (isAdd) => {
  advertForm.classList.toggle('ad-form--disabled', isAdd);
  map.classList.toggle('map--faded', isAdd);
};

const modePage = (flag) => {
  setActivateForm(advertFormElements, flag);
  setActivateForm(mapFilters, flag);
  setActivateForm(mapCheckBoxes, flag);
  setActivateForm(sliders, flag);
  setClassForm(flag);
};


const resetForm = (form) => {
  form.reset();
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
    }
  });
};

export { modePage, formSubmit, advertForm, resetForm };
