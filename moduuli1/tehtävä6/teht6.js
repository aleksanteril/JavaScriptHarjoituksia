'use strict';

let isCalculate = confirm('Should i calculate the square root?')
let output;

if (isCalculate) {
  let numInt = parseInt(prompt('Enter a number to calculate'))
  output = 'Square root of ' + numInt + ' is: ' + Math.sqrt(numInt).toFixed(2);

} else {
  output = 'The square root is not calculated'
}

document.querySelector('#isleap').innerHTML = output;