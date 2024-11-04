'use strict';


// Funktio joka palauttaa random arvon min ja max välillä
// Muuteltu siten että 1 <= x <= 6. eli kertaa 6 +1 ja floor
function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

//Kysytään käyttäjältä pyöräytyksien määrä
let numberRolls = parseInt(prompt('How many rolls of dice?'));

//Pyöritellään noppaa
let diceSum = 0
for (let i = 0; i < numberRolls; i++) {
  diceSum += diceRoll();
}

//Tulostetaan tulos
document.querySelector('#diceSum').innerHTML = 'Sum of dice is ' + diceSum;
