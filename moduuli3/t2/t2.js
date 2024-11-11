'use strict';

const ulList = document.querySelector('#target');
const list = ['First item', 'Second item', 'Third item'];


for (let i = 0; i < 3; i++) {
    let listItem = document.createElement('li');
    let text = document.createTextNode(list[i]);
    listItem.appendChild(text);
    ulList.appendChild(listItem);
}


