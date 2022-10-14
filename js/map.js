import { modePage } from './mode.js';
import { popupOffer } from './popup.js';
import { createOffers } from './data.js';

const addressField = document.querySelector('#address');
const coordinates =
{
  lat: 35.675, //35.658553299865794,
  lng: 139.75, //139.77657171642844,
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
  addressField.value = `Широта ${mainMarker.getLatLng().lat.toFixed(5)},` +
    `долгота ${mainMarker.getLatLng().lng.toFixed(5)}`;
};
getAddress();

mainMarker.on('moveend', () => {
  getAddress();
});

const pinIcon = L.icon(
  {
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }
);


const createMarker = (offer) => {
  const { lat, lng } = offer.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      pinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(popupOffer(offer));
};

const offers = Array.from(createOffers);

offers.forEach((offer) => {
  createMarker(offer);
});

// const infoNotifications = generateArrayData(10);
// const popupsFragment = generateTemplate(infoNotifications);

// const greatenPinMarkers = (similarOffers) => {
//   for (let i = 0; i < similarOffers.length; i++) {
//     L.marker(
//       {
//         lat: similarOffers[i].location.lat,
//         lng: similarOffers[i].location.lng,
//       },
//       {
//         icon: pinIcon
//       })
//       .bindPopup(similarOffers.children[i])
//       .addTo(markerGroup);
//   }
// };

// greatenPinMarkers(similarListFragments);
