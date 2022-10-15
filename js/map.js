import { modePage } from './mode.js';
import { popupOffer } from './popup.js';
import { createOffers } from './data.js';

const addressField = document.querySelector('#address');
const coordinates =
{
  lat: 35.675,
  lng: 139.75,
  zoom: 12
};

const map = L.map('map-canvas')
  .on('load', () => {
    modePage(true);
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

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

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

const getAddress = () => {
  addressField.value =
    `широта ${mainMarker.getLatLng().lat.toFixed(5)}, ` +
    `долгота ${mainMarker.getLatLng().lng.toFixed(5)}`;
};

getAddress();

mainMarker.on('moveend', () => {
  getAddress();
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const offers = Array.from(createOffers);

offers.forEach((offer) => {
  console.log(popupOffer(offer));
  const { lat, lng } = offer.location;
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
});
