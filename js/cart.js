/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementsByTagName('tbody')[0];
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody = document.getElementsByTagName('tbody')[0];
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i in cart.items) {
    let trElement = document.createElement('tr');
    tbody.appendChild(trElement);
    let tdElement0 = document.createElement('td');
    let tdElement1 = document.createElement('td');
    let tdElement2 = document.createElement('td');
    tdElement0.setAttribute('id', i);
    tdElement0.textContent = 'x';
    tdElement1.textContent = cart.items[i].quantity;
    tdElement2.textContent = cart.items[i].product;
    trElement.appendChild(tdElement0);
    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
  }
}
function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
