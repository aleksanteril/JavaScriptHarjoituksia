'use strict';

// Funktio joka palauttaa random arvon min ja max välillä
// Muuteltu siten että 1 <= x <= 6. eli kertaa 6 +1 ja floor
function diceRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

//Luodaan tarvittavat vakiot tosijaan
let numberDice = parseInt(prompt('Enter number of dice.'));
let sumDice = parseInt(prompt('Enter sum of the dice.'));
let counter = 0;
let throwAmount = 100000;

// Simuloidaan nopan heittoa 100000 kertaaaa
for (let i = 0; i < throwAmount; i++) {
    let simulatedsumDice = 0;
    for (let i = 0; i < numberDice; i++) {
        simulatedsumDice += diceRoll();
    }
    if (sumDice === simulatedsumDice) counter++;
}

//Tulokset html tiedostoon
document.querySelector('#prob').innerHTML = 'Probability of sum ' + sumDice +
    ' with ' + numberDice + ' dice, is about: ' +
    (counter / throwAmount * 100).toFixed(2) + '%';