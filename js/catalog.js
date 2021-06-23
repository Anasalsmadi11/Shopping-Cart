/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
let cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm(){

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts){
    let optinElement = document.createElement('option');
    optinElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optinElement);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
<<<<<<< HEAD
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event.target.items.value, event.target.quantity.value);
=======
function handleSubmit(event){

  
  console.log(event);
  

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  



  addSelectedItemToCart();
>>>>>>> ef30da8a013832637444ea0ddb51b66ed8c571b6
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
<<<<<<< HEAD
function addSelectedItemToCart(product, quantity) {
=======
function addSelectedItemToCart () {
>>>>>>> ef30da8a013832637444ea0ddb51b66ed8c571b6
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  cart.addItem(product, quantity);
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
<<<<<<< HEAD
function updateCounter() {
  const cartItems = JSON.parse(localStorage.getItem('cart'))
  cart = new Cart(cartItems);
  let listItems = document.getElementById('itemCount');
  listItems.textContent = cart.items.length;
=======
function updateCounter() { 
  let itemCount = document.getElementById('itemCount');
  itemCount.textContent = cart.items.length;
  
>>>>>>> ef30da8a013832637444ea0ddb51b66ed8c571b6
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  // TODO: Get the item and quantity from the form
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  console.log(cartItems);
  for(let i =0 ; i<cartItems.length;i++){
    //new Cart(cartItems[i].quantity , cartItems[i].Product);
  
    
    let cartContents = document.getElementById('cartContents');
    let pElement = document.createElement('p');
    pElement.textContent= `${cartItems[i].quantity} : ${cartItems[i].product}`;
    cartContents.appendChild(pElement);
    
  }
  // TODO: Add a new element to the cartContents div with that information
<<<<<<< HEAD
  const cartItems = JSON.parse(localStorage.getItem('cart'))
  cart = new Cart(cartItems);
  let cartContents = document.getElementById('cartContents');
  let pElement = document.createElement('p')
  for (let i in cart.items) {
    pElement.textContent = ` You have added a ${cart.items[i].quantity}  of ${cart.items[i].product}`;
    cartContents.appendChild(pElement);
  }
=======
  // things have been DONE in Group
>>>>>>> ef30da8a013832637444ea0ddb51b66ed8c571b6
}


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

function getData() {
  let data = JSON.parse(localStorage.getItem('cart'));
  if (data) {
    for (let i = 0; i < data.length; i++) {
      let cart = new Cart(data[i]);
      updateCounter();
      updateCartPreview();
    }
  }
}
getData();
populateForm();
