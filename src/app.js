import { getProductsByCategory } from './js/service.js';
import { createCard } from './js/createCard.js';

const categories = {
    women: "women's clothing",
    men: "men's clothing",
    electronics: 'electronics',
    jewelery: 'jewelery'
}

window.onload = () => {
    addWomenProducts();
    addMenProducts();
    addElectronicsProducts();
    addJeweleryProducts();
}

const addWomenProducts = async () => {
    const products = await getProductsByCategory(categories.women);
    
    let cards = '';
    products.forEach(item => {
        const card = createCard(item);
        cards += card;
    });
    const section = document.querySelector('#women_clothes').children[1];
    section.innerHTML = cards;
}

const addMenProducts = async () => {
    const products = await getProductsByCategory(categories.men);

    let cards = '';
    products.forEach(item => {
        const card = createCard(item);
        cards += card;
    });
    const section = document.querySelector('#men_clothes').children[1];
    section.innerHTML = cards;
}

const addElectronicsProducts = async () => {
    const products = await getProductsByCategory(categories.electronics);

    let cards = '';
    products.forEach(item => {
        const card = createCard(item);
        cards += card;
    });
    const section = document.querySelector('#electronics').children[1];
    section.innerHTML = cards;
}

const addJeweleryProducts = async () => {
    const products = await getProductsByCategory(categories.jewelery);

    let cards = '';
    products.forEach(item => {
        const card = createCard(item);
        cards += card;
    });
    const section = document.querySelector('#jewelery').children[1];
    section.innerHTML = cards;
}