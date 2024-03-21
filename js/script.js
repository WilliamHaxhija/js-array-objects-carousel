const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Seleziono gli elementi del DOM in cui inserire le immagini 

const mainThumb = document.querySelector('.main-thumbnail');
const smallThumbs = document.querySelectorAll('[class|=small-thumbnail]');

//Inserisco le immagini

for (let i = 0; i < smallThumbs.length; i++) {
    thisThumb = smallThumbs[i];
    let img = images[i].image;
    thisThumb.innerHTML = `<img src="./img/${img}" alt="${images[i].title}">`;
}

//Creo evento per il click

const arrowDown = document.querySelector('.fa-circle-chevron-down');
let i = 0;
const smallImages = document.querySelectorAll('.small-thumbnails-ctn img');
if (smallImages[i] !== i) {
    smallImages[i].classList.add('active');
}
createElementInDom(images[i].image, images[i].title, images[i].text)

arrowDown.addEventListener('click', function() {
    smallImages[i].classList.remove('active');
    i++;
    if (i >= images.length) {
        i = 0;
    }
    createElementInDom(images[i].image, images[i].title, images[i].text)
    if (smallImages[i] !== i) {
        smallImages[i].classList.add('active');
    }
});

const arrowUp = document.querySelector('.fa-circle-chevron-up');

arrowUp.addEventListener('click', function() {
    smallImages[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    createElementInDom(images[i].image, images[i].title, images[i].text)
    if (smallImages[i] !== i) {
        smallImages[i].classList.add('active');
    }
});

//FUNCTIONS

function createElementInDom (image, title, text, number) {
    mainThumb.innerHTML = `<img src="./img/${image}" alt="">
                           <div class="img-description">
                                <h3>${title}<h3>
                                <p> ${text}<p>
                           </div>`;
}