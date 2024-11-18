'use strict';

const queryParam = document.querySelector('#query');
const queryUrl = 'https://api.tvmaze.com/search/shows?q=';
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const response = await fetch(queryUrl + queryParam.value)
    const data = await response.json()
    console.log(data)
} )
