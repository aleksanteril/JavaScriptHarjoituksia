'use strict';

//Yhdistää str listan yhdeksi str
function concat(stringArray) {
    let str = '';
    for (let i = 0; i < stringArray.length; i++) {
        str += stringArray[i];
    }
    return str
}

let str2 = concat(['John', 'DeeDee', 'Joey', 'Marky'])
document.querySelector('#string').innerHTML = str2;