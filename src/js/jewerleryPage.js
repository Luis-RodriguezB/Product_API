import { getProducts } from './service.js';
import { createCard } from './createCard.js';
import categories from './categories.js';

(function(){
    window.onload = async () => {
        const container = document.querySelector('#main_container').children[1];
        const products = await getProducts();
        const clothes = products.filter( item => item.category === categories.jewelery );
        
        let cards = '';
        clothes.forEach( item => {
            cards += createCard(item);
        });
        container.innerHTML = cards;
    }
})();