'use strict'

let button = document.querySelector("#buttonMenu");
let blockColor = document.querySelector(".blockColor")

button.addEventListener('click', function () {
    blockColor.classList.toggle('active');
});


let image = document.querySelector("#buttonMenu");

image.addEventListener('click', function () {
    image.classList.toggle('hover');
});

let whiteColorP = document.createElement('p');
let beigeColorP = document.createElement('p');
let mokkoColorP = document.createElement('p');
let peachColorP = document.createElement('p');
let orangeColorP = document.createElement('p');



let whiteColor = document.querySelector(".blockColor li:nth-child(1)");
whiteColor.addEventListener('click', getMelk);
whiteColor.addEventListener('click', function () {
    whiteColorP.innerHTML = "COLOR MELK";
    blockColor.appendChild(whiteColorP);
});

whiteColorP.addEventListener('click', function () {
    blockColor.removeChild(whiteColorP);
});


let beigeColor = document.querySelector(".blockColor li:nth-child(2)");
beigeColor.addEventListener('click', getBeige);
beigeColor.addEventListener('click', function () {
    beigeColorP.innerHTML = "COLOR BEIGE";
    blockColor.appendChild(beigeColorP);
});


beigeColorP.addEventListener('click', function () {
    blockColor.removeChild(beigeColorP);
});


let mokkoColor = document.querySelector(".blockColor li:nth-child(3)");
mokkoColor.addEventListener('click', getMokko);
mokkoColor.addEventListener('click', function () {
    blockColor.appendChild(mokkoColorP);
    mokkoColorP.innerHTML = "COLOR MOKKO";
});

mokkoColorP.addEventListener('click', function () {
    blockColor.removeChild(mokkoColorP);
});


let peachColor = document.querySelector(".blockColor li:nth-child(4)");
peachColor.addEventListener('click', getPeach);
peachColor.addEventListener('click', function () {
    peachColorP.innerHTML = "COLOR PEACH";
    blockColor.appendChild(peachColorP);
});

peachColorP.addEventListener('click', function () {
    blockColor.removeChild(peachColorP);
});


let orangeColor = document.querySelector(".blockColor li:nth-child(5)");
orangeColor.addEventListener('click', getOrange);
orangeColor.addEventListener('click', function () {
    orangeColorP.innerHTML = "COLOR ORANGE";
    blockColor.appendChild(orangeColorP);
});

orangeColorP.addEventListener('click', function () {
    blockColor.removeChild(orangeColorP);
});


function getMelk() {
    document.body.classList.toggle("activeMelk");
    blockColor.classList.remove('active');
}


function getBeige() {
    document.body.classList.toggle("activeBeige");
    blockColor.classList.remove('active');
}


function getMokko() {
    document.body.classList.toggle("activeMokko");
    blockColor.classList.remove('active');
}


function getPeach() {
    document.body.classList.toggle("activePeach");
    blockColor.classList.remove('active');
}

function getOrange() {
    document.body.classList.toggle("activeOrange");
    blockColor.classList.remove('active');
}


let blockRadioItems = document.getElementsByTagName('input');
for (let i = 0; i < blockRadioItems.length; i++) {
    blockRadioItems[0].addEventListener('click', getMelk);
    blockRadioItems[1].addEventListener('click', getBeige);
    blockRadioItems[2].addEventListener('click', getMokko);
    blockRadioItems[3].addEventListener('click', getPeach);
    blockRadioItems[4].addEventListener('click', getOrange);
}



