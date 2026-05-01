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
        category:"western, shooter",
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
]

// Знаходимо контейнер, куди будемо додавати картки (переконайся, що в HTML є елемент з таким id)
const container = document.querySelector('.catalog');

function renderCatalog(items) {
    // Очищуємо контейнер перед рендером
    container.innerHTML = "";

    items.forEach(game => {
        // Створюємо головну обгортку картки
        const card = document.createElement('div');
        card.classList.add('game-card');

        // Перевіряємо ціну: якщо це число, додаємо "грн", якщо текст — лишаємо як є
        const displayPrice = typeof game.price === 'number' ? `${game.price} грн` : game.price;

        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <div class="game-info">
                <h3 class="game-title">${game.name}</h3>
                <p class="game-category">Категорія: ${game.category}</p>
                <p class="game-price">Ціна: <strong>${displayPrice}</strong></p>
                <button class="buy-btn">Придбати</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Запуск функції
renderCatalog(tovari);