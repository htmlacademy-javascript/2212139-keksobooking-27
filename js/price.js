const advertFormElement = document.querySelector('.ad-form');
const typeHouseElement = advertFormElement.querySelector('#type');
const priceFieldElement = advertFormElement.querySelector('#price');
const sliderElement = advertFormElement.querySelector('.ad-form__slider');

// объект для установки минимальной цены поля цены за ночь
const minPrices = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

// создаем слайдер
noUiSlider.create(sliderElement, {
  start: [minPrices[typeHouseElement.value]],
  connect: [true, false],
  range: {
    min: 0,
    max: 100000
  }
});

// событие слайдера при перетаскивании ползунка
sliderElement.noUiSlider.on('update', (values) => {
  priceFieldElement.value = parseInt(values, 10);
});

priceFieldElement.value = '';

//вручную изменили цену в поле цены -> выставили ползунок слайдера
priceFieldElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set(priceFieldElement.value);
  if (priceFieldElement.value === '0') {
    priceFieldElement.value = '';
  }
});

// вызывается при событии валидации формы
const validatePrice = (value) => {
  priceFieldElement.placeholder = minPrices[typeHouseElement.value];
  return value < 100000 && value > minPrices[typeHouseElement.value];
};

// сообщение об ошибке поля price
const getPriceErrorMessage = (value) => {
  if (value > 100000) {
    return 'Максимальная цена 100 000 рублей';
  }
  if (value < minPrices[typeHouseElement.value]) {
    return `Минимальная цена ${minPrices[typeHouseElement.value]} рублей`;
  }
};

// для актуализации цены при загрузке страницы
const updatePlaceHolder = (element) => {
  element.placeholder = minPrices[typeHouseElement.value];
};

export { priceFieldElement, validatePrice, getPriceErrorMessage, updatePlaceHolder };
