'use strict';

// h2 = name, a = url of show, img = medium image, div = summary: kaikki tämä article alle
function showsElements(dataArray) {
    for (let data of dataArray) {
        console.log(data);
        const h2Element = document.createElement("h2");
        h2Element.appendChild(document.createTextNode(data.show.name));

        const aElement = document.createElement("a");
        aElement.href = data.show.url;
        aElement.target = '_blank';
        aElement.appendChild(document.createTextNode(data.show.url));


        const imgElement = document.createElement("img");
        data.show.image ? imgElement.src = data.show.image.medium : imgElement.src = 'https://placehold.co/210x295';
        imgElement.alt = data.show.name;

        const divElement = document.createElement("div");
        divElement.innerHTML = data.show.summary;

        const articleElement = document.createElement("article");
        articleElement.appendChild(h2Element);
        articleElement.appendChild(imgElement);
        articleElement.appendChild(aElement);
        articleElement.appendChild(divElement);
        results.appendChild(articleElement);
    }
}


const results = document.querySelector('#results')
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const value_from_input = document.querySelector('#query').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
    const data = await response.json();
    results.innerHTML = '';
    showsElements(data);
});

