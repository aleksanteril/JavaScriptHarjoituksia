'use strict';

const calculate = document.querySelector('#start');
const operation = document.querySelector('#operation');
const resultElement = document.querySelector('#result');

calculate.addEventListener('click', () => {
    let num1 = parseFloat(document.querySelector('#num1').value);
    let num2 = parseFloat(document.querySelector('#num2').value);
    let result;

    switch (operation.value) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        default:
            console.log('Error')
    }
    resultElement.innerHTML = result;
});