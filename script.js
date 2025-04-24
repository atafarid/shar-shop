// Sample products data
const products = {
    sprays: [
        {
            id: 1,
            name: "factor 8kg",
            price: "Rs. 2,100",
            image: "Factor 8kg.PNG"
        },
        {
            id: 2,
            name: "aegis 400ml",
            price: "Rs. 750",
            image: "Aegis 400ml.PNG"
        },
        {
            id: 3,
            name: "Eins 400ml amino acid ",
            price: "Rs. 750",
            image: "Eins 400ml amino acid.PNG"
        },
        {
            id: 4,
            name: "Orcus ",
            price: "Rs. 1,200",
            image: "Orcus.PNG"
        },
        {
            id: 5,
            name: "Anchor 196 rice hybrid seed",
            price: "Rs. 11,000",
            image: "Anchor 196 rice hybrid seed.PNG"
        } 
         
         
    ],
    fertilizers: [
        {
            id: 6,
            name: "NPK Fertilizer",
            price: "Rs. 2,500",
            image: "https://via.placeholder.com/250x180?text=NPK+Fertilizer"
        },
        {
            id: 7,
            name: "Organic Compost",
            price: "Rs. 1,200",
            image: "https://via.placeholder.com/250x180?text=Organic+Compost"
        },
        {
            id: 8,
            name: "Urea Fertilizer",
            price: "Rs. 1,800",
            image: "https://via.placeholder.com/250x180?text=Urea+Fertilizer"
        },
        {
            id: 9,
            name: "Potash Fertilizer",
            price: "Rs. 2,200",
            image: "https://via.placeholder.com/250x180?text=Potash+Fertilizer"
        },
        {
            id: 10,
            name: "DAP Fertilizer",
            price: "Rs. 2,800",
            image: "https://via.placeholder.com/250x180?text=DAP+Fertilizer"
        }
    ]
};

// Load products
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('sprays', 'spray-container');
    loadProducts('fertilizers', 'fertilizer-container');
    
    // Setup carousel buttons
    setupCarousel('spray-container');
    setupCarousel('fertilizer-container');
});

function loadProducts(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button>Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

function setupCarousel(containerId) {
    const container = document.getElementById(containerId);
    const leftBtn = container.previousElementSibling;
    const rightBtn = container.nextElementSibling;
    
    leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -250, behavior: 'smooth' });
    });
    
    rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: 250, behavior: 'smooth' });
    });
}

// Save products to JSON (for admin panel)
function saveProducts() {
    localStorage.setItem('agricultureProducts', JSON.stringify(products));
}

// Load products from JSON (for admin panel)
function loadProductsFromStorage() {
    const storedProducts = localStorage.getItem('agricultureProducts');
    if (storedProducts) {
        return JSON.parse(storedProducts);
    }
    return products;
}// Create the "Add to Cart" button
const addToCartBtn = document.createElement('button');
addToCartBtn.id = 'addToCartBtn';
addToCartBtn.textContent = 'Add to Cart';
document.body.appendChild(addToCartBtn);

// Create a container for payment options (hidden by default)
const paymentOptions = document.createElement('div');
paymentOptions.id = 'paymentOptions';
paymentOptions.style.display = 'none'; // Initially hidden
paymentOptions.innerHTML = `
    <h3>Choose Payment Method:</h3>
    <button class="payment-btn" data-method="jazzcash">JazzCash</button>
    <button class="payment-btn" data-method="easypaisa">Easypaisa</button>
    <button class="payment-btn" data-method="paypal">PayPal</button>
`;
document.body.appendChild(paymentOptions);

// Add click event to "Add to Cart" button
addToCartBtn.addEventListener('click', () => {
    paymentOptions.style.display = 'block'; // Show payment options
});

// Add click events to payment buttons
paymentOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('payment-btn')) {
        const method = e.target.getAttribute('data-method');
        alert(`You selected: ${method.toUpperCase()}`);
        paymentOptions.style.display = 'none'; // Hide after selection
    }
});