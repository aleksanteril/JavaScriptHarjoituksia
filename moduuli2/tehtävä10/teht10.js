'use strict';


//Äänestys kandidaattien lista
const candidateArray = [];

//Kysytään monta ja nimet listaan
const numberCandidates = +prompt('Enter number of candidates');
for (let i = 0; i < numberCandidates; i++) {
    const candidateName = prompt(`Enter name of ${i+1}st candidate`);
    candidateArray.push({name: candidateName, votes: 0});
}

const numberVoters = +prompt('Enter number of voters');
for (let i = 0; i < numberVoters; i++) {
    const vote = prompt(`Enter vote of ${i+1}st voter`);
    for (let j = 0; j < numberCandidates; j++) {
        if (candidateArray[j].name === vote) candidateArray[j].votes ++;
    }
}

candidateArray.sort((a, b) => {
    console.log(a,b);
    return b.votes-a.votes;
});
