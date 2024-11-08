'use strict';

//Kysytään käyttäjältä 3 eri lukua 3 promptilla
//+ unary muuttaa string suoraan int muotoon
const input1 = +prompt('Anna 1. kokonaisluku');
const input2 = +prompt('Anna 2. kokonaisluku');
const input3 = +prompt('Anna 3. kokonaisluku');

//Tehdään laskutoimituksia. summa, tulo ja keskiarvo
const sum = input1 + input2 + input3;
const product = input1 * input2 * input3;
const avrg = sum / 3;

//Lisätään dokumenttiin homma
document.querySelector('#sum').innerHTML = 'Summa on: ' + sum;
document.querySelector('#product').innerHTML = 'Tulo on: ' + product;
document.querySelector('#average').innerHTML = 'Keskiarvo on: ' + avrg;