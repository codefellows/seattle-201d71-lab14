/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //ODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  var optionElement = document.createElement('option');
  optionElement.textContent = 'Select Item';
  selectElement.appendChild(optionElement);
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
  var item = document.getElementById('items');
  var quantity = document.getElementById('quantity')
  //console.log(item.value);
  // ODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(item.value, quantity.value);
  cart.saveToLocalStorage();
  updateCounter(quantity.value);
  updateCartPreview(item.value, quantity.value);

}

// ODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(item, quantity) {
  // ODO: suss out the item picked from the select list
  var item = item;
  //console.log('addSelectedItemToCart',item);
  // ODO: get the quantity
  var quantity = parseInt(quantity);
  //console.log('addSelectedItemToCart',quantity);




  cart.addItem(item, quantity);




  // ODO: using those, add one item to the Cart
}



var lastQuantity = 0;
// ODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(quantity) {
var cartCount = parseInt(quantity) + lastQuantity;
var selectElement = document.getElementById('itemCount');
console.log(cartCount)
selectElement.textContent = cartCount;


lastQuantity = cartCount;

}

// ODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(item, quantity) {
  var selectElement = document.getElementById('cartContents');
  var cartElement = document.createElement('li');
  cartElement.textContent = "Item: " + item + "   Qty: " + quantity;
  selectElement.appendChild(cartElement);

  // ODO: Get the item and quantity from the form
  // ODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
