import { getRandomPositiveInteger, getRandomPositiveFloat } from './util.js';


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


const similarOfferCount = 1;

const createOffer = () => ({
  author: {
    avatar:
      `img/avatars/user${getRandomPositiveInteger(0, 10).toString().padStart(2, '0')}.png`
  },
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

const createOffers = () => Array.from({ length: similarOfferCount }, createOffer);


export { createOffers };
