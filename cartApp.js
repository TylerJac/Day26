document.addEventListener("DOMContentLoaded", () => {
  initializeCart();

  const addItemForm = document.getElementById('addItemForm');
  addItemForm.addEventListener('submit', addItemToCart);

  const displayCartButton = document.getElementById('displayCartButton');
  displayCartButton.addEventListener('click', displayCartContents);
});

function initializeCart() {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

function addItemToCart(event) {
  event.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  const cart = JSON.parse(localStorage.getItem('cart'));

  const newItem = {
    id: Date.now(), // Use timestamp as unique ID
    name: itemName,
    price: itemPrice
  };

  cart.push(newItem);
  localStorage.setItem('cart', JSON.stringify(cart));

  document.getElementById('addItemForm').reset();
}

function displayCartContents() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartContentsDiv = document.getElementById('cartContents');

  if (cartContentsDiv) {
    cartContentsDiv.innerHTML = ''; // Clear previous contents

    if (cart.length === 0) {
      cartContentsDiv.textContent = 'The cart is empty.';
      return;
    }

    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(cart, null, 2); // Format JSON with indentation
    cartContentsDiv.appendChild(pre);
  } else {
    console.error('Cart contents div not found');
  }
}

function removeItemFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart'));

  cart.splice(index, 1); // Remove item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart));

  displayCartContents(); // Refresh the cart contents display
}
