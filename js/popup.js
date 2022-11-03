const showPopupOffer = ({ author, offer, location }) => {

  const similarOffersTemplate = document.querySelector('#card').content.querySelector('.popup');

  const offerCloneElement = similarOffersTemplate.cloneNode(true);
  const photosListElement = offerCloneElement.querySelector('.popup__photos');
  const featuresListElement = offerCloneElement.querySelector('.popup__features');

  const setHidden = (selector) =>
    offerCloneElement.querySelector(selector).classList.add('hidden');

  const setTextContent = (selector) => offerCloneElement.querySelector(selector);

  if (!author.avatar) {
    setHidden('.popup__avatar');
  } else {
    offerCloneElement.querySelector('.popup__avatar').src = author.avatar;
  }

  if (!offer.title) {
    setHidden('.popup__title');
  } else {
    setTextContent('.popup__title').textContent = offer.title;
  }

  if (!offer.address) {
    setHidden('.popup__text--address');
  } else {
    setTextContent('.popup__text--address').textContent =
      `Географические координаты: широта: ${location.lat}, долгота: ${location.lng}`;
  }

  if (!offer.price) {
    setHidden('.popup__text--price');
  } else {
    setTextContent('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  }

  if (!offer.type) {
    setHidden('.popup__type');
  } else {
    setTextContent('.popup__type').textContent = offer.type;
  }

  if (!offer.rooms || !offer.guests) {
    setHidden('.popup__text--capacity');
  } else {
    setTextContent('.popup__text--capacity').textContent =
      `${offer.rooms} комнаты для ${offer.guests} гостей`;
  }

  if (!offer.checkin || !offer.checkout) {
    setHidden('.popup__text--time');
  } else {
    setTextContent('.popup__text--time').textContent =
      `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  if (!offer.description) {
    setHidden('.popup__description');
  } else {
    setTextContent('.popup__description').textContent = offer.description;
  }

  if (!offer.features) {
    featuresListElement.classList.add('hidden');
  } else {
    featuresListElement.innerHTML = '';
    for (let i = 0; i < offer.features.length; i++) {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${offer.features[i]}`);
      featuresListElement.appendChild(featureElement);
    }
  }

  if (!offer.photos) {
    photosListElement.classList.add('hidden');
  } else {
    photosListElement.innerHTML = '';
    for (let i = 0; i < offer.photos.length; i++) {
      const photoElement = document.createElement('img');
      photoElement.src = `${offer.photos[i]}`;
      photoElement.width = '45';
      photoElement.height = '40';
      photoElement.alt = 'Фотография жилья';
      photoElement.classList.add('popup__photo');
      photosListElement.appendChild(photoElement);
    }
  }
  return offerCloneElement;
};

export { showPopupOffer };
