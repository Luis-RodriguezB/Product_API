const API = `https://fakestoreapi.com`;

const getData = async ( type, argument = '' ) => {
    const response = await fetch(`${API}/${type}/${argument}`)
        .catch( error => console.log(error));

    return response.json();
}

export const getProducts = async () => {
    const products = await getData('products');

    return products || [];
}

export const getProductsByCategory = async (category) => {
    const products = await getProducts();

    return products.filter( product => product.category === category ).slice(0, 4) || [];
}

export const getProductById = async ( id ) => {
    const product = await getData('products', id);

    return product;
}

export const getCategories = async () => {
    const categories = await getData('categories');

    return categories || [];
}