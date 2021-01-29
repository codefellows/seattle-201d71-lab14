/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var counter = 0;
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
  var optionElement = document.createElement('option');
  optionElement.textContent = Product.allProducts[i].name;
  selectElement.appendChild(optionElement)
  }

}
populateForm();

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault()
  console.log(event.target.quantity.value, "inside the handle submit function")
  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter(event);
  updateCartPreview(event);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var itemChosen = event.target.items.value;
  var quantityChosen = event.target.quantity.value;
  cart.addItem(itemChosen, quantityChosen);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(event) {
  console.log(event)
  var spanElement = document.getElementById('itemCount');
  console.log(spanElement)

  var totalQuantity = event.target.quantity.value;
  counter += parseInt(totalQuantity);
  console.log(counter, "coming from counter")
  spanElement.textContent = counter
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var contentsOfCart = document.getElementById('cartContents')
  var totalCartContents = event.target.quantity.value;
  var itemsInCart = event.target.items.value;
  var p = document.createElement('p');
  p.textContent = "You just added "  + totalCartContents + " " + itemsInCart + "(s) in the cart";
  contentsOfCart.appendChild(p);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
