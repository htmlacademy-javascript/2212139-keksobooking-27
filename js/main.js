// import { similarListFragment } from './popup.js';
import { validate } from './validate.js';
import './map.js';
import { modePage } from './mode.js';


// document.querySelector('#map-canvas').appendChild(similarListFragment);

const button = document.querySelector('.ad-form__submit');

button.addEventListener('click', () => validate());

modePage(false);


