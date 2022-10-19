

import { createMarker } from './map.js';
import { modePage, formSubmit, advertForm } from './form.js';
import { getData } from './api.js';
import { showAlert } from './message.js';


modePage(false);

getData((offers) => {
  offers.slice(10, 20).forEach((offer) => createMarker(offer));
}, showAlert);

formSubmit(advertForm);
