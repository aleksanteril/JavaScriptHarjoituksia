'use strict';

const year = parseInt(prompt('Syötä tarkistettava vuosi.'));
let isLeap = false;

if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
    isLeap = true;
}

//Näytetään onko true vai false
document.querySelector('#isleap').innerHTML = isLeap;