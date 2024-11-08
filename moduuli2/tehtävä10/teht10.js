'use strict';


//Äänestys kandidaattien lista
const candidateArray = [];

//Kysytään monta ja nimet listaan
const numberCandidates = +prompt('Enter number of candidates');
for (let i = 0; i < numberCandidates; i++) {
    const candidateName = prompt(`Enter name of ${i+1}st candidate`);
    candidateArray.push({name: candidateName, votes: 0});
}

//Kysytään äänestäjien määrä ja otetaan äänet
const numberVoters = +prompt('Enter number of voters');
for (let i = 0; i < numberVoters; i++) {
    const vote = prompt(`Enter vote of ${i+1}st voter`);
    for (let j = 0; j < numberCandidates; j++) {
        if (candidateArray[j].name === vote) candidateArray[j].votes ++;
    }
}

//Järjestellään lista äänien mukaan
candidateArray.sort((a, b) => {return b.votes-a.votes});

//Tulostetaan voittaja ja muutkin järjestyksessä
console.log(`Winner is ${candidateArray[0].name} with ${candidateArray[0].votes} votes`);
for (let j = 1; j < candidateArray.length; j++) {
    console.log(`${candidateArray[j].name} came with ${candidateArray[j].votes} votes`);
}
