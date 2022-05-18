export const createCard = ({ image, title, price, category }) => {
  const card = `
    <div class="col-12 col-sm-6 col-lg-3 px-4 px-sm-2">
        <div class="card mb-3 mb-sm-3">
            <div class="card-img-container">
                <img src="${image}" class="card-img-top h-100" alt="${title}">
            </div>
            <div class="card-body p-2">
                <h6 class="card-title">${title}</h6>
                <p class="card-text mb-1">Price: $${price}</p>
                <p class="card-text mb-1">Category: ${category}</p>
            </div>
        </div>
    </div>
    `;

    return card;
};
