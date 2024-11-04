'use strict';

//Kysytään käyttäjältä nimi
const name = prompt('Hei! Syötä nimesi.');

//Tulostetaan Hello, nimi innerHTML
document.querySelector('#tulos').innerHTML = 'Hello, ' + name;