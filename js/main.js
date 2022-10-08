import { similarListFragment } from './popup.js';
import { activatePage, deactivatePage } from './mode.js';


document.querySelector('#map-canvas').appendChild(similarListFragment);

const btn = document.querySelector('img'); // сверху KEKSOBOOKING

let toggle = true;

btn.onclick = () => {
  if (toggle) {
    deactivatePage();
    toggle = !toggle;
  }
  else {
    activatePage();
    toggle = !toggle;
  }
};

