'use strict';

//Haetaan lista elementti
const ulList = document.querySelector('#target');

//Asetetaan lista elementit
const listItem = `<li>First item</li><li>Second item</li><li>Third item</li>`;

//Lisätään elementit listaan
ulList.innerHTML = listItem;
//Asetetaan class nimi
ulList.className = 'my-list';