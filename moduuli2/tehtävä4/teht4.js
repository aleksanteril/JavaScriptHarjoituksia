'use strict';

//Luodaan numerolista
const numArray = [];

//Kysytään käyttäjältä numeroita kunnes käyttäjä laittaa 0
let userInput;
do {
    userInput = +prompt('Enter a number, to quit enter 0');
    if (!isNaN(userInput) && userInput !== 0) {
        numArray.push(userInput);
    }
} while (userInput !== 0)

//Järjestellään ja printataan konsoliin
numArray.sort()
for (let num of numArray) {
    console.log(num);
}