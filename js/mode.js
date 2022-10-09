
const map = document.querySelector('.map');
const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('fieldset');
const mapFilters = document.querySelectorAll('.map__filter');
const mapCheckBoxes = document.querySelectorAll('.map__checkbox');
const sliders = advertForm.querySelectorAll('.ad-form__slider');

const setActivateForm = (elements, isEnabled) => {
  elements.forEach((element) => {
    element.disabled = !isEnabled;
  });
};

const setClassForm = (isAdd) => {
  if (isAdd) {
    advertForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
  } else {
    advertForm.classList.remove('ad-form--disabled');
    map.classList.remove('map--faded');
  }
};

const modePage = (flag) => {
  setActivateForm(advertFormElements, flag);
  setActivateForm(mapFilters, !flag);
  setActivateForm(mapCheckBoxes, flag);
  setActivateForm(sliders, flag);
  setClassForm(flag);
};

export { modePage };
