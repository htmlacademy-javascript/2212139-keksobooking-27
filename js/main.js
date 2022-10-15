
import { validate } from './validate.js';
import { createMarker } from './map.js';
import { modePage } from './mode.js';
import { createOffers } from './data.js';


const button = document.querySelector('.ad-form__submit');
button.addEventListener('click', () => validate());
modePage(false);

const offers = Array.from(createOffers);
offers.forEach((offer) => createMarker(offer));
