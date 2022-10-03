import { createOffers } from './data.js';

const typeOfRoom = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const similarOffersTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarOffers = createOffers();

const similarListFragment = document.createDocumentFragment();

similarOffers.forEach(({ author, offer }) => {

  const offerElement = similarOffersTemplate.cloneNode(true);
  if (!author.avatar) {
    offerElement.querySelector('.popup__avatar').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__avatar').src = author.avatar;
  }
  if (!offer.title) {
    offerElement.querySelector('.popup__title').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__title').textContent = offer.title;
  }
  if (!offer.address) {
    offerElement.querySelector('.popup__text--address').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__text--address').textContent = offer.address;
  }
  if (!offer.price) {
    offerElement.querySelector('.popup__text--price').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  }
  if (!offer.type) {
    offerElement.querySelector('.popup__type').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__type').textContent = typeOfRoom[offer.type];
  }
  if (!offer.rooms || !offer.quests) {
    offerElement.querySelector('.popup__text--capacity').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__text--capacity').textContent =
      `${offer.rooms} комнаты для ${offer.quests} гостей`;
  }
  if (!offer.checkin || !offer.checkout) {
    offerElement.querySelector('.popup__text--time').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__text--time').textContent =
      `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }
  if (!offer.description) {
    offerElement.querySelector('.popup__description').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__description').textContent = offer.description;
  }

  const featuresList = offerElement.querySelector('.popup__features');
  if (!offer.features.length) {
    featuresList.classList.add('hidden');
  } else {
    featuresList.innerHTML = '';
    for (let i = 0; i < offer.features.length; i++) {
      const featureElement =
        `<li class="popup__feature popup__feature--${offer.features[i]}"></li>`;
      featuresList.insertAdjacentHTML('afterbegin', featureElement);
    }
  }

  const photosList = offerElement.querySelector('.popup__photos');
  if (!offer.photos.length) {
    photosList.classList.add('hidden');
  } else {
    photosList.innerHTML = '';
    for (let i = 0; i < offer.photos.length; i++) {
      const imgElement =
        `<img src="${offer.photos[i]}" class="popup__photo" width="45"` +
        'height="40" alt="Фотография жилья">';
      photosList.insertAdjacentHTML('afterbegin', imgElement);
    }
  }

  similarListFragment.appendChild(offerElement);

  document.querySelector('#map-canvas').appendChild(similarListFragment);
});

