'use strict';


// Funktio joka palauttaa random arvon min ja max välillä
function diceRoll(minInt, maxInt) {
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
}

//Kysytään käyttäjältä pyöräytyksien määrä
let numberRolls = parseInt(prompt('How many rolls of dice?'))

//Pyöritellään noppaa
let diceSum = 0
for (let i = 0; i < numberRolls; i++) {
  console.log(diceSum += diceRoll(1,6))
}

//Tulostetaan tulos
document.querySelector('#diceSum').innerHTML = 'Sum of dice is ' + diceSum;
