
const map = document.querySelector('.map');
const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('fieldset');
const mapFilters = document.querySelectorAll('.map__filter');
const mapCheckBoxes = document.querySelectorAll('.map__checkbox');
const sliders = advertForm.querySelectorAll('.ad-form__slider');

const setActivateForm = (elements, isEnabled) => {
  elements.forEach((element) => {
    element.disabled = isEnabled;
  });
};

const setClassForm = (isAdd) => {
  advertForm.classList.toggle('ad-form--disabled', isAdd);
  map.classList.toggle('map--faded', isAdd);
};

const modePage = (flag) => {
  setActivateForm(advertFormElements, flag);
  setActivateForm(mapFilters, flag);
  setActivateForm(mapCheckBoxes, flag);
  setActivateForm(sliders, flag);
  setClassForm(flag);
};

export { modePage };
