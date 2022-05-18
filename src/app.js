import { getProducts, getProductsByCategory } from './service.js';
import { createCard } from './createCard.js';

const categories = {
    women: "women's clothing",
    men: "men's clothing",
    electronics: 'electronics',
    jewelery: 'jewelery'
}


const addWomenProduct = async () => {
    const products = await getProductsByCategory(categories.women);
    
    products.forEach(item => {
        const card = createCard(item);
        const section = document.querySelector('#women_clothes').children[1];
        section.innerHTML += card;
    });
}

addWomenProduct();