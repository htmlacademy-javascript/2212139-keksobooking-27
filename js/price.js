const advertForm = document.querySelector('.ad-form');
const typeHouse = advertForm.querySelector('#type');
const priceField = advertForm.querySelector('#price');
const slider = advertForm.querySelector('.ad-form__slider');

// объект для установки минимальной цены поля цены за ночь
const minPrices = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

// создаем слайдер
noUiSlider.create(slider, {
  start: [minPrices[typeHouse.value]],
  connect: [true, false],
  range: {
    min: 0,
    max: 100000
  }
});

// событие слайдера при перетаскивании ползунка
slider.noUiSlider.on('update', (values) => {
  priceField.value = parseInt(values, 10);
});

priceField.value = '';

//вручную изменили цену в поле цены -> выставили ползунок слайдера
priceField.addEventListener('change', () => {
  slider.noUiSlider.set(priceField.value);
  if (priceField.value === '0') {
    priceField.value = '';
  }
});

// вызывается при событии валидации формы
function validatePrice(value) {
  priceField.placeholder = minPrices[typeHouse.value];
  if (value < 100000 && value > minPrices[typeHouse.value]) {
    return true;
  }
  return false;
}

// сообщение об ошибке поля price
function getPriceErrorMessage(value) {
  if (value > 100000) {
    return 'Максимальная цена 100 000 рублей';
  }
  if (value < minPrices[typeHouse.value]) {
    return `Минимальная цена ${minPrices[typeHouse.value]} рублей`;
  }
}

// для актуализации цены при загрузке страницы
const updatePlaceHolder = () => {
  priceField.placeholder = minPrices[typeHouse.value];
};

export { priceField, validatePrice, getPriceErrorMessage, slider, updatePlaceHolder };
