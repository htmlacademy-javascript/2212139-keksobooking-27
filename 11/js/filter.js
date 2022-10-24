import { isNumberInRange, debounce } from './util.js';
import { markerGroup, createMarker } from './map.js';

const ANY = 'any';
const MAX_ADS = 10;
const RENDER_DELAY = 500;

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
    return +roomsElement.value === offer.offer.rooms;
  }
};

const filterGuests = (offer) => {
  if (guestsElement.value === ANY) {
    return true;
  } else {
    return +guestsElement.value === offer.offer.guests;
  }
};

const chooseFeatures = (offer) => Array.from(featuresCheckBoxes)
  .every((featureElement) => {
    if (!featureElement.checked) {
      return true;
    }
    if (!offer.offer.features) {
      return false;
    }
    return offer.offer.features.includes(featureElement.value);
  });

const clickForFilter = (cb) => {
  filtersContainer.addEventListener('change', debounce(() => {
    markerGroup.clearLayers();
    const temps = cb();
    temps.forEach((offer) => createMarker(offer));
  }, RENDER_DELAY));
};

const filterOffers = (offers) => {
  const tempOffers = offers.filter(filterType)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterGuests)
    .filter(chooseFeatures);

  return tempOffers.sort(compareAds).slice(0, MAX_ADS);
};

const resetFilters = () => {
  typeElement.value = ANY;
  roomsElement.value = ANY;
  priceElement.value = ANY;
  guestsElement.value = ANY;
  featuresCheckBoxes.forEach((element) => { element.checked = false; });
};

export { filterOffers, clickForFilter, resetFilters };
