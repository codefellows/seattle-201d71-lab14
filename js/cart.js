/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
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
  var clear = document.getElementsByTagName('tbody')[0];
  clear.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  console.log(cart.items);
  for (var i = 0; i < cart.items.length; i++);
  var tablerow = document.createElement('tr');
  tablerow.appendChild(deletedItem);
  tablerow.appendChild(quantity);
  tablerow.appendChild(itemElement);
  
  var removeItem = document.createElement('a');
  removeItem.textContent = "Remove Item";
  removeItem.setAttribute('href', "#");
  removeItem.setAttribute('abbr', cart.items[i].product);
  
  var quantity = document.createElement('td');
  var itemElement = document.createElement('td');
  var deletedItem = document.createElement('td');
  deletedItem.appendChild(removeItem);
  
  quantity.textContent = cart.items[i].product;
  itemElement.textContent = cart.items[i].product;
  tablebody.appendChild(tr);


  }

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

// function renderTableHead() {
//   var tableHead = document.createElement('thead');
//   table.appendChild(tableHead);// Table Body

//   // Variable to start creation of table
//   var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
//   var tableStart = document.createElement('th');
//   tableStart.textContent = '';

//   tableHead.appendChild(tableStart);
//   for (var a = 0; a < openHours.length; a++) {
//     var tableStart = document.createElement('th');
//     tableStart.textContent = openHours[a];
//     tableHead.appendChild(tableStart);
//   }
// }

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
