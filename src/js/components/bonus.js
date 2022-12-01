import data from '../../../public/bonuses.json';

let modalBonus = document.getElementById("bonus");
let container = document.querySelector(".bonus__container");
let section = document.querySelector(".section-bonus");
let span = document.getElementById("btnclose");
let currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');

const bonus = document.querySelectorAll('.section-bonus__item');
for (let i = 0; i < bonus.length; i++) {
    bonus[i].addEventListener('click', openBonusModal);
    bonus[i].setAttribute('id', i);
    if (currentLang === 'en') {
        bonus[i].addEventListener('click', generateInfoEn);
    } else {
        bonus[i].addEventListener('click', generateInfo);
    }
}

function openBonusModal() {
    modalBonus.style.display = "block";
    if (currentLang === 'en') {
        generateInfoEn();
    } else {
        generateInfo();
    }
}
const closeBonusModal = () => {
    modalBonus.style.display = "none";
    section.style.pointerEvents = 'auto';
}
if (span) {
    span.addEventListener('click', closeBonusModal);
}

function generateInfo() {
    section.style.pointerEvents = 'none';
    if (this) {
        container.innerHTML = `<a href='#' class='bonus__close' id='btnclose'></a>`;
        container.innerHTML += `
        <h1>${data.bonuses[this.id].percentage}</h1>
        <h2>${data.bonuses[this.id].name}</h2>
        <p>${data.bonuses[this.id].text}</p>
        `;
    }
}

function generateInfoEn() {
    section.style.pointerEvents = 'none';
    if (this) {
        container.innerHTML = `<a href='#' class='bonus__close' id='btnclose'></a>`;
        container.innerHTML += `
        <h1>${data.enbonuses[this.id].percentage}</h1>
        <h2>${data.enbonuses[this.id].name}</h2>
        <p>${data.enbonuses[this.id].text}</p>
        `;
    }
}