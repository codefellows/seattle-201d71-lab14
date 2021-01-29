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
  var tableRows = document.querySelectorAll('#cart tbody tr');
  for (var i = 0; i <= tableRows.length; i++) {
    if (tableRows[i]) {
      tableRows[i].remove();
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table body
  var tableBody = document.querySelector('#cart tbody');
  // TODO: Iterate over the items in the cart
  for(var i in cart.items){
    // TODO: Create a TR
    var cartItemRow = document.createElement('tr');  // This is where we're creating the TR within the body
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  var deleteLink = document.createElement('td');  // Adding a TD to the TR
    deleteLink.textContent = 'X';
    deleteLink.classList.add('remover');
    deleteLink.id = i;

    var amountOfItem = document.createElement('td');   // Another TD within the TR
    amountOfItem.textContent = cart.items[i].quantity
    // TD for the item should be the image pathway that displays the image
    var itemPathWay = document.createElement('td');  // Putting a TD within the TR that has the remove capability
    var imageTag = document.createElement('img');
    imageTag.setAttribute('src',`${cart.items[i].product.url}`);
    itemPathWay.appendChild(imageTag);
    //itemPathWay.textContent = cart.items[i].product.url; // We need to change this to an image tag source attribute

    cartItemRow.appendChild(deleteLink);
    cartItemRow.appendChild(amountOfItem);
    cartItemRow.appendChild(itemPathWay);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableBody.appendChild(cartItemRow);
  }
}

function removeItemFromCart(event) {
    
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.classList.contains('remover')) {
    cart.removeItem(parseInt(event.target.id));  // Removing the item from the cart based on the ID we set when we created the button
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
  }   
}

// This will initialize the page and draw the cart on screen
renderCart();
