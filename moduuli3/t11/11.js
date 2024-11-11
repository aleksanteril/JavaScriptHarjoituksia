'use strict';
const picArray = [
    {
        title: 'Title 1',
        caption: 'Caption 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
        image: {
            large: 'img/pic1.jpg',
            medium: 'thumbnails/pic1.jpg',
        },
    },
    {
        title: 'Title 2',
        caption: 'Caption 2',
        description:
            'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
        image: {
            large: 'img/pic2.jpg',
            medium: 'thumbnails/pic2.jpg',
        },
    },
    {
        title: 'Title 3',
        caption: 'Caption 3',
        description:
            'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
        image: {
            large: 'img/pic3.jpg',
            medium: 'thumbnails/pic3.jpg',
        },
    },
    {
        title: 'Title 4',
        caption: 'Caption 4',
        description:
            'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        image: {
            large: 'img/pic4.jpg',
            medium: 'thumbnails/pic4.jpg',
        },
    },
    {
        title: 'Title 5',
        caption: 'Caption 5',
        description:
            'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
        image: {
            large: 'img/pic5.jpg',
            medium: 'thumbnails/pic5.jpg',
        },
    },
    {
        title: 'Title 6',
        caption: 'Caption 6',
        description:
            'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
        image: {
            large: 'img/pic6.jpg',
            medium: 'thumbnails/pic6.jpg',
        },
    },
    {
        title: 'Title 7',
        caption: 'Caption 7',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
        image: {
            large: 'img/pic7.jpg',
            medium: 'thumbnails/pic7.jpg',
        },
    },
    {
        title: 'Title 8',
        caption: 'Caption 8',
        description:
            'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
        image: {
            large: 'img/pic8.jpg',
            medium: 'thumbnails/pic8.jpg',
        },
    },
    {
        title: 'Title 9',
        caption: 'Caption 9',
        description:
            'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
        image: {
            large: 'img/pic9.jpg',
            medium: 'thumbnails/pic9.jpg',
        },
    },
];

// add your code here

//Modal avaaminen oikealla kuvalla
function showModal(i) {
    const modalImage = document.querySelector('dialog > img');
    modalImage.src = picArray[i].image.large;
    modalImage.alt = picArray[i].title
    modal.style.display = 'block';
}

//Modal sulkeminen
const closeButton = document.querySelector('span');
closeButton.addEventListener('click', () => modal.style.display = 'none');


//Laitetaan modaalille halutut asetukset
const modal = document.querySelector('dialog');
modal.style.position = 'fixed';
modal.style.top = '20%';
modal.style.zIndex = '1';

//Artikkelien ja kuvien luominen
const section = document.querySelector('#pictures')
for (let i=0; i < picArray.length; i++) {
    //Luodaan article element, ja sille event listener
    const article = document.createElement("article");
    article.className = 'card';
    article.addEventListener('click', () => showModal(i));

    //Luodaan heading element ja teksti sille
    const heading2 = document.createElement("h2");
    heading2.appendChild(document.createTextNode(picArray[i].title));

    //Luodaan figure, img ja figcaption elementit ja yhdistetään ne lopussa
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = picArray[i].image.medium;
    img.alt = document.createTextNode(picArray[i].title).toString();
    const figcaption = document.createElement("figcaption");
    figcaption.appendChild(document.createTextNode(picArray[i].caption))
    figure.appendChild(img);
    figure.appendChild(figcaption);

    //Luodaan p ja lisätään teksti siihen
    const paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(picArray[i].description));

    //Yhdistetään nämä artikkelin alle
    article.appendChild(heading2);
    article.appendChild(figure);
    article.appendChild(paragraph);

    //yhdistetään artikkeli oikeaan kohtaan alle
    section.appendChild(article);

}
