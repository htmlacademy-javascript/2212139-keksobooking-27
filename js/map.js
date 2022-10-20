import { modePage } from './form.js';
import { popupOffer } from './popup.js';
import { updatePlaceHolder, priceField } from './price.js';


// для установления координат маркера в поле адреса
const addressField = document.querySelector('#address');

// центр Токио, взял из техзадания середина диапазона координат
const coordinates =
{
  lat: 35.675,
  lng: 139.75,
  zoom: 12
};

// создаем и устанавливаем карту
const map = L.map('map-canvas')
  .on('load', () => {
    modePage(true);
    updatePlaceHolder(priceField);
  })
  .setView({
    lat: coordinates.lat,
    lng: coordinates.lng
  }, coordinates.zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// добавляем слой для группировки маркетов
const markerGroup = L.layerGroup().addTo(map);

// иконка основного маркера
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

// добавляем на карту основной маркер
const mainMarker = L.marker(
  {
    lat: coordinates.lat,
    lng: coordinates.lng
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
).addTo(map);

// функция добавления координат в поле адреса
const getAddress = () => {
  addressField.value =
    `широта ${mainMarker.getLatLng().lat.toFixed(5)}, ` +
    `долгота ${mainMarker.getLatLng().lng.toFixed(5)}`;
};

// начальное заполнение поля
getAddress();

// заполнение поля в конце перемещения
mainMarker.on('moveend', () => {
  getAddress();
});

// сброс координат главного маркера
const resetMainMarker = () => {
  mainMarker.setLatLng({
    lat: coordinates.lat,
    lng: coordinates.lng
  });
  getAddress();
};

// обычная иконка похожих адресов
const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// добавляем маркеры, объекты, балуны на карту.
const createMarker = (offer) => {
  const { location: { lat, lng } } = offer;
  //const { lat, lng } = offer.location;
  const marker = L.marker(
    {
      lat: lat,
      lng: lng,
    },
    {
      icon: pinIcon
    },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(popupOffer(offer));
};


export { createMarker, resetMainMarker };
