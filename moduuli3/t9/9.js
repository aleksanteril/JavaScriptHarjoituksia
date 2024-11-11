'use strict';

'use strict';
const calculate = document.querySelector('#start');
const resultElement = document.querySelector('#result');

calculate.addEventListener('click', () => {
    let calcString = document.querySelector('#calculation').value;
    let result;
    let calcStringArray;
    if (calcString.includes('+')) {
        calcStringArray = calcString.split('+');
        result = parseFloat(calcStringArray[0]) + parseFloat(calcStringArray[1]);
    }
    else if (calcString.includes('-')) {
        calcStringArray = calcString.split('-');
        result = parseFloat(calcStringArray[0]) - parseFloat(calcStringArray[1]);
    }
    else if (calcString.includes('*')) {
        calcStringArray = calcString.split('*');
        result = parseFloat(calcStringArray[0]) * parseFloat(calcStringArray[1]);
    }
    else if (calcString.includes('/')) {
        calcStringArray = calcString.split('/');
        result = parseFloat(calcStringArray[0]) / parseFloat(calcStringArray[1]);
    }
    resultElement.innerHTML = result;
});