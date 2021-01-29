/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
console.log(cart);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();//
  cart.saveToLocalStorage();//
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var quantityLocation = document.getElementById('quantity');
  var quantity = quantityLocation.value;
  var items = document.getElementById('items');
  cart.addItem(items, quantity);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var numberOfItems = cart.items.length;
  var itemLocation = document.getElementById('itemCount');
  itemLocation.textContent = " " + numberOfItems;
}

var cartContents = document.getElementById('cartContents');
var h2 = document.createElement('h2');
var ol = document.createElement('ol');
h2.textContent = 'Cart Preview';
cartContents.appendChild(h2);
h2.appendChild(ol);

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  ol.textContent = '';
  for (var i = 0; i < cart.items.length; i++){
    var li = document.createElement('li');
    li.textContent = cart.items[i].product.name + ' ' + cart.items[i].quantity;
    ol.appendChild(li);
  }

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

