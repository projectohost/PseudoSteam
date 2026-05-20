const tovari = [
    {
        name: "СS 2",
        category: "shooter",
        price: "free",
        image: "./images/Counter-strike_2.jpg"
    },
    {
        name: "Dota 2",
        category: "Action role-playing game",
        price: "free",
        image: "./images/Dota_2.jpg"
    },
    {
        name: "S.T.A.L.K.E.R 2",
        category: "post-apocalyptic first-person shooter",
        price: 1000,
        image: "./images/S.T.A.L.K.E.R._2.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        category: "western, shooter",
        price: 500,
        image: "./images/Red_2.jpg"
    },
    {
        name: "Red Dead Redemption ",
        category: "western, shooter",
        price: 300,
        image: "./images/Red_1.jpg"
    },
    {
        name: "Rust",
        category: "survival sim, first-person shooter",
        price: 230,
        image: "./images/Rust.jpeg"
    },
    {
        name: "clash of clans",
        category: "strategic game",
        price: "free",
        image: "./images/clash_of_clans.jpg"
    },
    {
        name: "Cyberpunk 2077",
        category: "action RPG",
        price: 500,
        image: "./images/Cyberpunk_2077_box_art.jpg"
    },
    {
        name: "GTA SAN ANDREAS",
        category: "хз",
        price: 100,
        image: "./images/GTA-San_Andreas.jpg"
    },
    {
        name: "GTA V",
        category: "хз",
        price: 1000,
        image: "./images/Grand_Theft_Auto_V.png"
    }
];

// Масив для збереження товарів у кошику
let cart = [];

const container = document.querySelector('.catalog');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalPriceEl = document.getElementById('cart-total-price');

// Функція виведення карток товарів
function renderCatalog(items) {
    container.innerHTML = "";

    items.forEach((game, index) => {
        const card = document.createElement('div');
        card.classList.add('game-card');

        const displayPrice = typeof game.price === 'number' ? `${game.price} грн` : game.price;

        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <div class="game-info">
                <h3 class="game-title">${game.name}</h3>
                <p class="game-category">Категорія: ${game.category}</p>
                <p class="game-price">Ціна: <strong>${displayPrice}</strong></p>
                <button class="buy-btn" data-index="${index}">Придбати</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Функція оновлення інтерфейсу кошика
function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-gray);">Кошик порожній :(</p>`;
        cartTotalPriceEl.textContent = 0;
        return;
    }

    cart.forEach((game, index) => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');

        const displayPrice = typeof game.price === 'number' ? `${game.price} грн` : game.price;
        
        if (typeof game.price === 'number') {
            total += game.price;
        }

        itemEl.innerHTML = `
            <img src="${game.image}" class="cart-item-img" alt="${game.name}">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${game.name}</h4>
                <p class="cart-item-price">${displayPrice}</p>
                <button class="remove-item-btn" data-cart-index="${index}">Видалити</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemEl);
    });

    cartTotalPriceEl.textContent = total;
}

// Додавання гри в кошик
function addToCart(gameIndex) {
    const selectedGame = tovari[gameIndex];
    cart.push(selectedGame);
    updateCartUI();
    cartSidebar.classList.add('open');
}

// Видалення гри з кошика
function removeFromCart(cartIndex) {
    cart.splice(cartIndex, 1);
    updateCartUI();
}

// Обробка кліків по всьому документу (делегування)
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn') && e.target.hasAttribute('data-index')) {
        const index = e.target.getAttribute('data-index');
        addToCart(index);
    }
    
    if (e.target.classList.contains('remove-item-btn')) {
        const cartIndex = e.target.getAttribute('data-cart-index');
        removeFromCart(cartIndex);
    }
});

// Кнопка кошика у верхній панелі — працює як перемикач (відкриває/закриває)
const carey = document.querySelector('.corzuna-link');
carey.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.toggle('open');
});

// Хрестик закриття всередині кошика
const closeCartBtn = document.getElementById('close-cart-btn');
closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Перший запуск
renderCatalog(tovari);