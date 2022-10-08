
const map = document.querySelector('.map');
const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('fieldset');
const mapFilters = document.querySelectorAll('.map__filter');
const mapCheckBoxes = document.querySelectorAll('.map__checkbox');
const slider = advertForm.querySelector('.ad-form__slider');


const setActivateForm = (elements, isEnabled) => {
  elements.forEach((element) => {
    element.disabled = !isEnabled;
  });
};

const deactivatePage = () => {
  setActivateForm(advertFormElements, false);
  setActivateForm(mapFilters, false);
  setActivateForm(mapCheckBoxes, false);
  advertForm.classList.add('ad-form--disabled');
  map.classList.add('map--faded');
  slider.setAttribute('disabled', true);
};

const activatePage = () => {
  setActivateForm(advertFormElements, true);
  setActivateForm(mapFilters, true);
  setActivateForm(mapCheckBoxes, true);
  advertForm.classList.remove('ad-form--disabled');
  map.classList.remove('map--faded');
  slider.removeAttribute('disabled');
};

export { deactivatePage, activatePage };
