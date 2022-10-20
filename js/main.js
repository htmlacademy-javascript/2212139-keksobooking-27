import { createMarker, markerGroup } from './map.js';
import { modePage, formSubmit, advertForm } from './form.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { filterOffers, clickForFilter } from './filter.js';

modePage(false);

getData((offers) => {
  markerGroup.clearLayers();
  const temps = filterOffers(offers);
  temps.forEach((offer) => createMarker(offer));
  clickForFilter(() => filterOffers(offers));
}, showAlert);

formSubmit(advertForm);
