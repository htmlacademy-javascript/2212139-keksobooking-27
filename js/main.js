import { createMarker, markerGroup } from './map.js';
import { switchPageMode, formSubmit, advertFormElement } from './form.js';
import { getData } from './api.js';
import { showAlertMessage } from './message.js';
import { filterOffers, onChangeFilter, switchActivateFilters } from './filter.js';

switchPageMode();
switchActivateFilters();


getData((offers) => {
  markerGroup.clearLayers();
  const filteredOffers = filterOffers(offers);
  filteredOffers.forEach((offer) => createMarker(offer));
  switchActivateFilters();
  onChangeFilter(() => filterOffers(offers));
}, showAlertMessage);

formSubmit(advertFormElement);
