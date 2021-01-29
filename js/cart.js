/* global Cart */
'use strict';


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var tableBody = document.getElementsByTagName('tbody')[0];
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('product')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableBody = document.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = "";
}
  
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  console.log(cart.items);
  for (var i = 0; i < cart.items.length; i++) {
    var tr = document.createElement('tr');
    var deleteLink = document.createElement('a');
    var quantity = document.createElement('td');
    var itemElement = document.createElement('td');
    var deletedLink = document.createElement('td');
    // delete link is just an "x" with an anchor tag around it
    // quanitity comes from this.quantity = quantity;
    // item comes from this.name = name;
    deleteLink.textContent = "X";
    deleteLink.setAttribute('href', "#");
    deleteLink.setAttribute('abbr', cart.items[i].product);
    quantity.textContent = cart.items[i].quantity;
    itemElement.textContent = cart.items[i].product;
    deletedLink.appendChild(deleteLink)
    tr.appendChild(deletedLink);
    tr.appendChild(quantity);
    tr.appendChild(itemElement);
    tableBody.appendChild(tr);
    
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  for (var i = 0; i < cart.items.length; i++) {
    console.log(event.target.abbr, cart.items[i].product)
    var abbr = event.target.getAttribute('abbr');
    if (abbr === cart.items[i].product) {
      cart.removeItem(i) 
      
    }
    cart.saveToLocalStorage();
    renderCart(); 
  }
  
}

// This will initialize the page and draw the cart on screen
renderCart();
