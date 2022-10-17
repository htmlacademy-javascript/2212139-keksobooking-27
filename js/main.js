
import { validate } from './validate.js';
import { createMarker } from './map.js';
import { modePage } from './mode.js';
import { getData } from './load.js';
import { showAlert } from './util.js';

const button = document.querySelector('.ad-form__submit');
button.addEventListener('click', () => validate());
modePage(false);


getData((offers) => {
  offers.slice(10, 20).forEach((offer) => createMarker(offer));
}, showAlert);

