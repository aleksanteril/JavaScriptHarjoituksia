'use strict';


//Luodaan lista ja kysytään 5 numeroa
const numArray = []
for (let i = 0; i < 5; i++) {
    numArray.push(+prompt(`Enter ${i+1}st number`));
}

//Print the numbers in reverse order
for (let i = numArray.length-1; i >= 0; i--) {
    console.log(numArray[i]);
}