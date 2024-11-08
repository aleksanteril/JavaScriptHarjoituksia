'use strict';

function even(numArray) {
    const evenNumArray = []
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) evenNumArray.push(numArray[i]);
    }
    return evenNumArray;
}

const numArray = [1,2,3,4,5,6]
const evenNumArray = even(numArray)
console.log(numArray);
console.log(evenNumArray);