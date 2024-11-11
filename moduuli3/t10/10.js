'use strict';

const outputElement = document.querySelector('#target');
const formElement = document.querySelector('#source');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('input[name=firstname]').value;
    const lastName = document.querySelector('input[name=lastname]').value;
    outputElement.innerHTML = `Your name is ${firstName} ${lastName}`;
})