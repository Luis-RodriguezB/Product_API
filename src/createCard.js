export const createCard = ({ image, title, price, category }) => {
  const card = `
    <div class="col-3 px-2">
        <div class="card">
            <img src="${image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text mb-1">Price: ${price}</p>
                <p class="card-text mb-1">Category: ${category}</p>
            </div>
        </div>
    </div>
    `;

    return card;
};
