// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(a, b) {
  // Если переданы отрицительные числа, возвращаем NaN
  if (a < 0 || b < 0) {
    return NaN;
  }

  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat(a, b, digits = 1) {
  // Если переданы отрицительные числа, возвращаем NaN
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }

  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки.
  // Метод возвращает строку, поэтому с помощью унарного плюса превращаем её в число
  return +result.toFixed(digits);
}

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


const similarOfferCount = 10;

const createOffer = () => ({
  author: {avatar:
    `img/avatars/user${getRandomPositiveInteger(0, 10).toString().padStart(2, '0')}.png`},
  offer: {
    title: 'Предложение',
    address: `${getRandomPositiveFloat(35.65000, 35.70000, 5)},
              ${getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
    price: getRandomPositiveInteger(1000, 3000),
    type: TYPE[getRandomPositiveInteger(0, 5)],
    rooms: getRandomPositiveInteger(1, 6),
    quests: getRandomPositiveInteger(3, 8),
    checkin: CHECKIN[getRandomPositiveInteger(0, 3)],
    checkout: CHECKIN[getRandomPositiveInteger(0, 3)],
    features: FEATURES.slice(0, getRandomPositiveInteger(0, 5)),
    description: 'Уютное, комфортное, благоустроенное помещение',
    photos: PHOTOS.slice(0, getRandomPositiveInteger(0, 3))
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
  }
});

const similarOffers = Array.from({length: similarOfferCount}, createOffer);

// eslint-disable-next-line no-console
console.log(similarOffers);

