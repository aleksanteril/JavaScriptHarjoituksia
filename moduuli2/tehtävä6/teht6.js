'use strict';

//Funktio heittää noppaa 1<=x<=6
function diceRoll() {
    return Math.floor(Math.random()*6+1);
}

//Heitetään noppaa kunnes tulee 6
let str = '';
let roll;
do {
    roll = diceRoll();
    str += '<li>'+ roll + '</li>'
} while (roll !== 6)

//isketään html tiedostoon
document.querySelector('#dicelist').innerHTML += str;