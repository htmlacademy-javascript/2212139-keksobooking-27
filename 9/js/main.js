
import { validate } from './validate.js';
import './map.js';
import { modePage } from './mode.js';


const button = document.querySelector('.ad-form__submit');

button.addEventListener('click', () => validate());

modePage(false);


