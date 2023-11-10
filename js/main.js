'use strict'

//Creo un carosello come nello screenshot fornito, usando un array contenente una lista di cinque immagini.

// creo un array con le cinque immagini fornite
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// rimuovo il markup statico, creo gli elementi nel DOM e vi appendo le immagini, usando un ciclo for e delle condizioni
const items = document.querySelector('.items');
let currentslide = 0;

// Frecce
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Markup
for (let i = 0; i < images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    // Classe active per visualizzare le immagini
    if (i === currentslide) {
        item.classList.add('active');
    }

    // Immagini
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Landscape ${images[i]}`;
    item.append(img);
    items.append(item);
}

// Node list
const domItem = document.querySelectorAll('.item');
console.log(domItem);


// Thumbnail

// Selezione elemento .list
const thumb = document.querySelector('.list');

let currentThumb = 0;

for (let i = 0; i < images.length; i++) {
    // Contenitore nel DOM
    const element = document.createElement('div');
    element.classList.add('thumb-item');
    thumb.append(element);

    // Layer
    const layer = document.createElement('div');
    element.append(layer);
    layer.classList.add('layer');

    if (i === currentThumb) {
        element.classList.add('thumb-active');
    }

    // Immagini
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Landscape ${images[i]}`;
    element.append(img);

}

// Node list
const domThumbItem = document.querySelectorAll('.thumb-item');
console.log(domThumbItem);

// aggiugo un evento al click dell'utente selle frecce in modo da poter scorrere le immagini 

prev.addEventListener("click", function () {
    console.log('prev');

    if (currentslide > 0 && currentThumb > 0) {
        domThumbItem[currentThumb].classList.remove('thumb-active');
        domItem[currentslide].classList.remove('active');

        currentThumb--;
        currentslide--;

        domThumbItem[currentThumb].classList.add('thumb-active');
        domItem[currentslide].classList.add('active');

    }
})

next.addEventListener("click", function () {
    if (currentslide < domItem.length - 1 && currentslide < domItem.length - 1) {
        console.log('next')
        domThumbItem[currentThumb].classList.remove('thumb-active');
        domItem[currentslide].classList.remove('active');


        currentThumb++;
        currentslide++;

        domThumbItem[currentThumb].classList.add('thumb-active');
        domItem[currentslide].classList.add('active');

    }
})
