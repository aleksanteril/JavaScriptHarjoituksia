'use strict';

//Funktio karkausvuoden tarkastukseen, True on, False ei
function isLeap(year) {
    return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
}

//kysytään alkuvuosi ja loppuvuosi
let startYear = parseInt(prompt('Enter a start year.'));
let endYear = parseInt(prompt('Enter a end year.'));

let leapList = '';

for (let i = startYear; i <= endYear; i++) {
    if (isLeap(i)) {
        leapList += '<li>' + i + '</li>';
    }
}

console.log(leapList);
document.querySelector('#leaped').innerHTML = '<ul>' + leapList + '</ul>';
