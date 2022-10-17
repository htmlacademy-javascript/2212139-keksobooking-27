
import { pristine } from './validate.js';
import { createMarker } from './map.js';
import { modePage } from './mode.js';
import { getData, sendData } from './load.js';
import { showAlert } from './message.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const advertForm = document.querySelector('.ad-form');

modePage(false);

getData((offers) => {
  offers.slice(10, 20).forEach((offer) => createMarker(offer));
}, showAlert);

advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    sendData(new FormData(evt.target), showSuccessMessage, showErrorMessage);
  }
});
