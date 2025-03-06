// Initialize cart from local storage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart function
function addToCart(name, price) {
    const cartItem = { name, price };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    alert(`${name} has been added to the cart!`);
    updateCart();
}

// Buy Now function
function buyNow(name, price) {
    alert(`Proceeding to checkout for ${name} at $${price.toFixed(2)}`);
    // Add your checkout function here
}

// Remove from Cart function
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    updateCart();
}

// Update Cart function to display items in the cart module
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalDisplay = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        // Item details
        const itemText = document.createElement('span');
        itemText.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);

        itemElement.appendChild(itemText);
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);

        total += item.price;
    });

    cartTotalDisplay.textContent = `$${total.toFixed(2)}`;
}
