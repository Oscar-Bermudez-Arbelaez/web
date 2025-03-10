// Carrito de compras
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    cartCount.textContent = cartItems.length;
}

// Ejemplo: Agregar un plato al carrito
const ajiaco = {
    name: 'Ajiaco Santafereño',
    price: 25000
};

const addToCartButton = document.querySelector('.menu-item:nth-child(1) .add-to-cart');
addToCartButton.addEventListener('click', () => addToCart(ajiaco));

// Redes sociales
const whatsappLink = document.querySelector('.whatsapp-link a');
const instagramLink = document.getElementById('instagram-link');
const facebookLink = document.getElementById('facebook-link');
const appleLink = document.getElementById('apple-link');
const gmailLink = document.getElementById('gmail-link');

whatsappLink.href = 'https://wa.me/573172698243';
instagramLink.href = 'https://www.instagram.com/tu_usuario';
facebookLink.href = 'https://www.facebook.com/tu_pagina';
appleLink.href = 'https://www.apple.com/app-store/tu_app';
gmailLink.href = 'mailto:tu_correo@gmail.com';

// Funcionalidades adicionales
// ...
// Mostrar carrito de compras
const cartModal = document.getElementById('cart-modal');
const cartContent = document.getElementById('cart-content');
const cartTotal = document.getElementById('cart-total');
const closeCartButton = document.getElementById('close-cart');

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
    updateCart();
});

closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function updateCart() {
    cartContent.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartContent.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total}`;
}

// Ejemplo: Agregar más platos al carrito
const bandejaPaisa = {
    name: 'Bandeja Paisa',
    price: 30000
};

const addToCartButton2 = document.querySelector('.menu-item:nth-child(2) .add-to-cart');
addToCartButton2.addEventListener('click', () => addToCart(bandejaPaisa));