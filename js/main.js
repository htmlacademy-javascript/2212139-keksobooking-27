
import { pristine } from './validate.js';
import { createMarker } from './map.js';
import { modePage, advertForm } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './message.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const submitButton = advertForm.querySelector('.ad-form__submit');

modePage(false);

getData((offers) => {
  offers.slice(10, 20).forEach((offer) => createMarker(offer));
}, showAlert);

advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    submitButton.disabled = true;
    sendData(new FormData(evt.target), showSuccessMessage, showErrorMessage);
    submitButton.disabled = false;
  }
});
