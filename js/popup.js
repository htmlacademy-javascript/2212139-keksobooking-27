import { createOffers } from './data.js';

const similarOffersTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarOffers = createOffers();

const similarListFragment = document.createDocumentFragment();


similarOffers.forEach(({ author, offer }) => {

  const offerElement = similarOffersTemplate.cloneNode(true);

  const setHidden = (selector) => offerElement.querySelector(selector).classList.add('hidden');

  if (!author.avatar) {
    setHidden('.popup__avatar');
  } else {
    offerElement.querySelector('.popup__avatar').src = author.avatar;
  }

  if (!offer.title) {
    setHidden('.popup__title');
  } else {
    offerElement.querySelector('.popup__title').textContent = offer.title;
  }

  if (!offer.address) {
    setHidden('.popup__text--address');
  } else {
    offerElement.querySelector('.popup__text--address').textContent = offer.address;
  }

  if (!offer.price) {
    setHidden('.popup__text--price');
  } else {
    offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  }

  if (!offer.type) {
    setHidden('.popup__type');
  } else {
    offerElement.querySelector('.popup__type').textContent = offer.type;
  }

  if (!offer.rooms || !offer.quests) {
    setHidden('.popup__text--capacity');
  } else {
    offerElement.querySelector('.popup__text--capacity').textContent =
      `${offer.rooms} комнаты для ${offer.quests} гостей`;
  }

  if (!offer.checkin || !offer.checkout) {
    setHidden('.popup__text--time');
  } else {
    offerElement.querySelector('.popup__text--time').textContent =
      `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  if (!offer.description) {
    setHidden('.popup__description');
  } else {
    offerElement.querySelector('.popup__description').textContent = offer.description;
  }

  const featuresList = offerElement.querySelector('.popup__features');
  if (!offer.features.length) {
    featuresList.classList.add('hidden');
  } else {
    const fragment = document.createDocumentFragment();
    featuresList.innerHTML = '';
    for (let i = 0; i < offer.features.length; i++) {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${offer.features[i]}`);
      fragment.appendChild(featureElement);
    }
    featuresList.appendChild(fragment);
  }

  const photosList = offerElement.querySelector('.popup__photos');
  if (!offer.photos.length) {
    photosList.classList.add('hidden');
  } else {
    const fragment = document.createDocumentFragment();
    photosList.innerHTML = '';
    for (let i = 0; i < offer.photos.length; i++) {
      const photoElement = document.createElement('img');
      photoElement.src = `${offer.photos[i]}`;
      photoElement.width = '45';
      photoElement.height = '40';
      photoElement.alt = 'Фотография жилья';
      photoElement.classList.add('popup__photo');
      fragment.appendChild(photoElement);
    }
    photosList.appendChild(fragment);
  }

  similarListFragment.appendChild(offerElement);
});

export { similarListFragment };

