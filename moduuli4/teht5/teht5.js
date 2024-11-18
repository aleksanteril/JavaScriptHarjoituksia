'use strict';

const button = document.querySelector('button');

button.addEventListener('click', async () => {
    let joke = await fetch('https://api.chucknorris.io/jokes/random')
    joke = await joke.json();
    console.log(joke.value)
})