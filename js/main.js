import { similarListFragment } from './popup.js';
import { activatePage, deactivatePage } from './mode.js';


document.querySelector('#map-canvas').appendChild(similarListFragment);


let toggle = true;

document.onclick = () => {
  if (toggle) {
    deactivatePage(toggle);
    toggle = !toggle;
  }
  else {
    activatePage(toggle);
    toggle = !toggle;
  }
};

