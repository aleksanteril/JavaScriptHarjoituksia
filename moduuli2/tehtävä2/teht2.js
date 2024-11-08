'use strict';

//Kysytään kuinka monta kilpailijaa
const participantCount = +prompt('Enter number of participants');


//Luodaan lista ja kysytään kilpailijat
const nameArray = []
for (let i = 0; i < participantCount; i++) {
    nameArray.push(prompt(`Enter name of ${i+1}st participant`));
}

//Järjestellään lista
nameArray.sort()
//Luodaan lista elementit
let nameStr = '';
for (let i = 0; i < nameArray.length; i++) {
    nameStr += '<li>'+nameArray[i]+'</li>';
}

//Isketään html
document.querySelector('#competititor').innerHTML = nameStr;