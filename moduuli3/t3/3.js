'use strict';
const target = document.querySelector('#target');
const names = ['John', 'Paul', 'Jones'];

for (let i = names.length-1; i >= 0; i--) {
    let listItem = `<li>${names[i]}</li>`
    target.innerHTML += listItem;
}