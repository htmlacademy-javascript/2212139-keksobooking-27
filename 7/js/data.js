import { getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray } from './util.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TYPE_OF_ROOMS = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const CHECKINS = [
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

const DESCRIPTION = [
  'Великолепная квартира-студия в центре Токио.',
  'Подходит как туристам, так и бизнесменам.',
  'Квартира полностью укомплектована и недавно отремонтирована.'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const PRICE = {
  MIN: 1000,
  MAX: 20000
};

const ROOMS = {
  MIN: 1,
  MAX: 6
};

const GUEST = {
  MIN: 2,
  MAX: 12
};

const LAT = {
  MIN: 35.65000,
  MAX: 35.70000
};

const LNG = {
  MIN: 139.70000,
  MAX: 139.80000
};

const PRECISION = 5; // точность = количество цифр после точки
const SIMILAR_OFFER_COUNT = 9;

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArrayMinMax = (elements) =>
  getRandomPositiveInteger(elements.MIN, elements.MAX);

const createOfferArray = (count) => {
  const offers = [];
  for (let i = 0; i < count; i++) {
    const objOffer = {
      author: {
        avatar: `img/avatars/user${count < 9 ? '0' : ''}${count + 1}.png`
      },
      offer: {
        title: 'Предложение',
        address: `${getRandomPositiveFloat(LAT.MIN, LAT.MAX, PRECISION)},
              ${getRandomPositiveFloat(LNG.MIN, LNG.MAX, PRECISION)}`,
        price: getRandomArrayMinMax(PRICE),
        type: TYPE_OF_ROOMS[getRandomArrayElement(TYPES)],
        rooms: getRandomArrayMinMax(ROOMS),
        quests: getRandomArrayMinMax(GUEST),
        checkin: getRandomArrayElement(CHECKINS),
        checkout: getRandomArrayElement(CHECKINS),
        features: getRandomArray(FEATURES),
        description: getRandomArrayElement(DESCRIPTION),
        photos: getRandomArray(PHOTOS)
      },
      location: {
        lat: getRandomPositiveFloat(LAT.MIN, LAT.MAX, PRECISION),
        lng: getRandomPositiveFloat(LNG.MIN, LNG.MAX, PRECISION)
      }
    };
    offers.push(objOffer);
  }
  return offers;
};

const createOffers = () => createOfferArray(SIMILAR_OFFER_COUNT);

export { createOffers };
