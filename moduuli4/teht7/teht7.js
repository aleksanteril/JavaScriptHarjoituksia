'use strict';

function unixToDate(unix_timestamp){
    const date = new Date(unix_timestamp);
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes.toString();
    return hours + ':' + minutes;
}


function decodePolylineAddToMap(routeData) {
    console.log(routeData);
    const polylines = [];
    for (let route of routeData) {
        const mapPoints = L.Polyline.fromEncoded(route.legGeometry.points).getLatLngs();
        polylines.push(L.polyline(mapPoints).setStyle('blue'));
    }
    const timeStart = unixToDate(+routeData[0].startTime);
    const timeEnd = unixToDate(+routeData[routeData.length-1].endTime);
    routeTime.innerHTML = `Time start: ${timeStart} - Time end: ${timeEnd}`;
    return L.layerGroup(polylines);
}


//Karaportti 2 =  lat 60.223876 lon 24.758061
//Funktiolla haetaan koordinaattien perusteella tiedot reitistä karaportti 2 paikkaan, palautetaan tiedot
async function queryRoute(coordinates) {
    const param = {"query": `{plan(from: {lat: ${coordinates[1]}, lon: ${coordinates[0]}}to: {lat: 60.223876, lon: 24.758061}numItineraries: 1) {itineraries {legs {startTime endTime mode duration realTime distance transitLeg legGeometry{points}}}}}`};
    const response = await fetch(urlRoute, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: {
            'digitransit-subscription-key': apiKey,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

//Funktiolla kysytään paikan koordinaatit nimen perusteella
async function queryCoordinates() {
    const urlCoordinates = `https://api.digitransit.fi/geocoding/v1/search?text=${searchAddress.value}&size=1&digitransit-subscription-key=${apiKey}`;
    const response = await fetch(urlCoordinates);
    const data = await response.json();
    return data.features[0].geometry.coordinates;
}

//Luodaan kartta johon laitetaan reitit
const karaportti = [60.223876, 24.758061];
const map = L.map('map').setView(karaportti, 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Tuodaan elementit ja luodaan vakio-arvoja
const routeTime = document.querySelector('#routeTime');
const form = document.querySelector('#address');
const searchAddress = document.querySelector('#query');
const apiKey = '';
const urlRoute = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
let polylineLayer = []; //Layer poistamista varten

//Kun submit niin toteutetaan eka koordinaattien haku ja sitten haetaan koordinaateilla reitti ja leg geometry
//Seuraavaksi täytyy ottaa legGeometryt ja decodaa ne ja piirtää kartalle
form.addEventListener('submit', async event => {
    event.preventDefault();
    try {
        const coordinates = await queryCoordinates();
        const route = await queryRoute(coordinates);
        map.removeLayer(polylineLayer); //Poistetaan edellinen jos haetaan uusi
        polylineLayer = decodePolylineAddToMap(route.data.plan.itineraries[0].legs);
        map.addLayer(polylineLayer);
        map.fitBounds([[coordinates[1], coordinates[0]], [karaportti[0], karaportti[1]]]);
    } catch (error) {
        console.log('Tiedonhaussa tuli ongelmia, toimii vain HSL alueelle');
        console.error(error);
    }
});


