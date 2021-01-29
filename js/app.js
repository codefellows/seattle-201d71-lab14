'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items. DONE
  var itemAdded = new CartItem(product,quantity);
  this.items.push(itemAdded); //we are refrencing the array this.items and then pushing it to the itemAdded array
};

Cart.prototype.saveToLocalStorage = function() //cart is the club, prototype is the acces to the club, savetToLocalStorage is the function
  {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var stringify = JSON.stringify(this.items);
  localStorage.setItem('items', stringify);
};

// HINT: Remember to use command F
Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  // for loop?
  // pass index as a peramiter
  // Call splice at the this.array
  // Pass in index to the splice function as one of it's parameters
  var removeItemFromCart 

};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product constructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();


