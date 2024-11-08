'use strict';

//Luodaan lista ja kysytään kilpailijat
const nameArray = []
for (let i = 0; i < 6; i++) {
    nameArray.push(prompt(`Enter name of ${i+1}st dog`));
}

//Järjestellään lista
nameArray.sort()
//Luodaan lista elementit
let nameStr = '';
for (let i = nameArray.length-1; i >= 0; i--) {
    nameStr += '<li>'+nameArray[i]+'</li>';
}


//Isketään html
document.querySelector('#doglist').innerHTML = nameStr;