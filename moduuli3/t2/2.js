'use strict';

const ulList = document.querySelector('#target');
let textArray = ['First item', 'Second item', 'Third item'];


for (let i = 0; i < 3; i++) {
    let listItem = document.createElement('li');
    let text = document.createTextNode(textArray[i]);
    listItem.appendChild(text);
    ulList.appendChild(listItem);
}


