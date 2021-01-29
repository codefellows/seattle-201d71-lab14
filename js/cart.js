/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  
 localStorage.clear();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  for(var i = 0; i < cart.items.length; i++ ){
  var tbod = document.getElementsByTagName('tbody')[0];
  var tableRow = document.createElement('tr');
  var tablePhoto = document.createElement('td');
  var tableItem = document.createElement('td');
  var tableQuantity = document.createElement('td');
  var image = document.createElement('img');
  var buttonCell = document.createElement('td')
  var button = document.createElement('button');
  button.textContent = 'X';
  tableQuantity.textContent = cart.items[i].quantity;
  image.setAttribute('src', cart.items[i].filePath);
  tableItem.textContent = cart.items[i].product;
  console.log(cart.items[i].product);
  tablePhoto.appendChild(image);
  tableRow.appendChild(buttonCell);
  buttonCell.appendChild(button);
  tableRow.appendChild(tableItem);
  tableRow.appendChild(tableQuantity);
  tableRow.appendChild(tablePhoto);
  
  console.log(cart.items[i].filePath);
  // console.log(tbod);
  tbod.appendChild(tableRow);
  }
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
