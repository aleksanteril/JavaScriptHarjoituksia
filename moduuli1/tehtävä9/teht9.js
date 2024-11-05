'use strict';

//Palauttaa True jos prime, false jos ei
function isPrime(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i < Math.floor(num ** 0.5); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Otetaan numero käyttäjältä
let number = parseInt(prompt('Enter a number to test for prime.'));
let statementStr;

//Käytetään funktiossa ja sen mukaan
if (isPrime(number)) {
    statementStr = ' is a prime number!';
} else {
    statementStr = ' is NOT a prime number!';
}

// Laitetaan tulos html dokumenttiin ruudulle
document.querySelector('#prime').innerHTML = number + statementStr;