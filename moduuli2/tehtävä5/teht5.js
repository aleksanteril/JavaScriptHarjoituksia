'use strict';

//Luodaan numerolista
const numArray = [];

//Kysytään käyttäjältä numeroita kunnes käyttäjä laittaa 0
let loopRun = true;
while (loopRun) {
    const userInput = +prompt('Enter a number');
    if (!isNaN(userInput) && !numArray.includes(userInput)) {
        numArray.push(userInput);
    } else {
        console.log('The number has already been entered, ending program!');
        loopRun = false;
    }
}

//Listataan konsoliin
numArray.sort()
for (let num of numArray) {
    console.log(num);
}