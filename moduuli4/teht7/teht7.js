'use strict';


function decodePolylineAddToMap(routeData) {
    console.log(routeData);
    for (let route of routeData) {
        const mapPoints = L.Polyline.fromEncoded(route.legGeometry.points).getLatLngs();
        L.polyline(mapPoints).setStyle('blue').addTo(map);
    }
    const timeWastedUNIX = +routeData[routeData.length-1].endTime - +routeData[0].startTime
    routeTime.innerHTML = 'Time required '+ (timeWastedUNIX/1000/60).toFixed(0) +' minutes' //Time shown in minutes
}


//Karaportti 2 =  lat 60.223876 lon 24.758061
//Funktiolla haetaan koordinaattien perusteella tiedot reitistä karaportti 2 paikkaan, palautetaan tiedot
async function queryRoute(coordinates) {
    const param = {"query": `{plan(from: {lat: ${coordinates[1]}, lon: ${coordinates[0]}}to: {lat: 60.223876, lon: 24.758061}numItineraries: 1) {itineraries {legs {startTime endTime mode duration realTime distance transitLeg legGeometry{points}}}}}`}
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
const map = L.map('map').setView([60.223876, 24.758061], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Tuodaan elementit ja luodaan vakio-arvoja
const routeTime = document.querySelector('#routeTime')
const form = document.querySelector('#address');
const searchAddress = document.querySelector('#query');
const apiKey = '';
const urlRoute = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

//Kun submit niin toteutetaan eka koordinaattien haku ja sitten haetaan koordinaateilla reitti ja leg geometry
//Seuraavaksi täytyy ottaa legGeometryt ja decodaa ne ja piirtää kartalle
form.addEventListener('submit', async event => {
    event.preventDefault();
    const coordinates = await queryCoordinates();
    const route = await queryRoute(coordinates);
    decodePolylineAddToMap(route.data.plan.itineraries[0].legs);
})


