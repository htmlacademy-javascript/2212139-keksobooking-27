import { createMarker, markerGroup } from './map.js';
import { switchPageMode, formSubmit, advertForm } from './form.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { filterOffers, clickForFilter } from './filter.js';

switchPageMode();

getData((offers) => {
  markerGroup.clearLayers();
  const filteredOffers = filterOffers(offers);
  filteredOffers.forEach((offer) => createMarker(offer));
  clickForFilter(() => filterOffers(offers));
}, showAlert);

formSubmit(advertForm);
