import { createMarker, markerGroup } from './map.js';
import { modePage, formSubmit, advertForm } from './form.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { filterOffers } from './filter.js';

const filtersContainer = document.querySelector('.map__filters');

modePage(false);

filtersContainer.addEventListener('change', () => {
  getData((offers) => {
    markerGroup.clearLayers();
    const temps = filterOffers(offers);
    temps.slice(0, 10).forEach((offer) => createMarker(offer));
  }, showAlert);

});


formSubmit(advertForm);
