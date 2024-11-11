'use strict';

//Haetaan elementit HTML tiedostosta
let img = document.querySelector('#target');
const paraTrigger = document.querySelector('#trigger');

//On mouseover picB
paraTrigger.addEventListener('mouseover', () => img.src = 'img/picB.jpg');

//On mouseout picA
paraTrigger.addEventListener('mouseout', () => img.src = 'img/picA.jpg');