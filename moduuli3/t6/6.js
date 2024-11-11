'use strict';



//Haetaan element dokumentista
const nappi = document.querySelector('button');

//Kuunnellaan ja reagoidaan klikkaukseen
nappi.addEventListener('click', () => alert('Button clicked!'));