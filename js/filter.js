import { isNumberInRange } from './util.js';

const ANY = 'any';
const MAX_ADS = 10;

const Price = {
  'low': {
    MIN: 0,
    MAX: 10000,
  },
  'middle': {
    MIN: 10000,
    MAX: 50000,
  },
  'high': {
    MIN: 50000,
    MAX: 1000000
  },
};

const filtersContainer = document.querySelector('.map__filters');
const typeElement = filtersContainer.querySelector('#housing-type');
const priceElement = filtersContainer.querySelector('#housing-price');
const roomsElement = filtersContainer.querySelector('#housing-rooms');
const guestsElement = filtersContainer.querySelector('#housing-guests');
const featuresCheckBoxes = filtersContainer.querySelectorAll('input[name="features"]');

const compareAds = (adsA, adsB) => {
  const rankA = adsA.offer.features ? adsA.offer.features.length : 0;
  const rankB = adsB.offer.features ? adsB.offer.features.length : 0;
  return rankB - rankA;
};

const filterType = (offer) => {
  if (typeElement.value === ANY) {
    return true;
  } else {
    return typeElement.value === offer.offer.type;
  }
};

const filterPrice = (offer) => {
  if (priceElement.value === ANY) {
    return true;
  } else {
    return isNumberInRange(Number(offer.offer.price), Price[priceElement.value].MIN, Price[priceElement.value].MAX);
  }
};

const filterRooms = (offer) => {
  if (roomsElement.value === ANY) {
    return true;
  } else {
    return Number(roomsElement.value) === offer.offer.rooms;
  }
};

const filterGuests = (offer) => {
  if (guestsElement.value === ANY) {
    return true;
  } else {
    return guestsElement.value === String(offer.offer.guests);
  }
};

//filtersContainer.addEventListener('change', (evt) => {
//console.log(evt.target.id, evt.target.value);

const filterOffers = (offers) => {

  const tempOffers = offers.filter(filterType)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterGuests);

  return tempOffers.sort(compareAds);
};


export { filterOffers };
