'use strict';

function jokesElements(jokes) {
    for (let joke of jokes.result) {
        const pElement = document.createElement("p");
        pElement.appendChild(document.createTextNode(joke.value));

        const articleElement = document.createElement("article");
        articleElement.appendChild(pElement);
        results.appendChild(articleElement);
    }
}


const results = document.querySelector('#results');
const form = document.querySelector('form');

form.addEventListener('submit', async ev => {
    ev.preventDefault();
    results.innerHTML = '';
    const value_from_input = document.querySelector('#query').value;
    let jokes = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
    if (jokes.ok) {
        jokes = await jokes.json();
        jokesElements(jokes);
    }
});