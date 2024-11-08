'use strict';

//Funktio heittää noppaa 1<=x<=6
function diceRoll(sides) {
    return Math.floor(Math.random()*sides+1);
}
//Kysytään käyttäjältä tahkojen lkm
const sideCount = +prompt('Enter the number of sides')

//Heitetään noppaa kunnes tulee 6
let str = '';
let roll;
do {
    roll = diceRoll(sideCount);
    str += '<li>'+ roll + '</li>'
} while (roll !== sideCount)

//isketään html tiedostoon
document.querySelector('#dicelist').innerHTML += str;