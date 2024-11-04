'use strict';

//Funktio ottaa min ja max luvut, ja kaavalla math.random tekee float luvun välillä 0-1
// se kerrottaan maximilla ja plussataan minimi jotta ei mennä alle sen
function getRandomInt(minInt, maxInt) {
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
}


//Kysytään käyttäjän nimi ja asetetaan house muuttuja
const name = prompt('Hattu kysyy nimeäsi. Syötä nimi.');
var house = ''


//Valinta rakenne killan arvontaa varten
switch (getRandomInt(1,4)) {
  case 1:
    house = 'Ravenclaw';
    break;
  case 2:
    house = 'Griffindor';
    break;
  case 3:
    house = 'Slytherin'
    break;
  case 4:
    house = 'Hufflepuff'
    break;
}


//Lisätään tulokset html fileen
document.querySelector('#decision').innerHTML = name + ', you are ' + house;