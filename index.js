class Product {
  constructor(name, price) {
    if (price < 0) throw new Error("price cannot be negative");
    this.name = name;
    this.price = price; //Math.round(Math.random() * 500);
  }
}

// {
//   name: "roomba hoover",
//   price: 200
// }

let productsInCart = [
  new Product("roomba hoover", 200),
  new Product("thomson fridge", 1000)
];

function updateCartElements() {
  const totalItemsDOMEl = document.querySelector("#cart .total-items");

  totalItemsDOMEl.innerHTML = productsInCart.length;
}

updateCartElements();

document.querySelector("#add-to-cart").onclick = function() {
  productsInCart.push(new Product("new Item", 200));

  updateCartElements();
  displayCartContents();
};

let cartDOMEl = document.querySelector("#cart");

function displayCartContents() {
  let cartContentsDOMEl = document.querySelector("#cart-contents");

  cartContentsDOMEl.innerHTML = "";

  productsInCart.forEach(product => {
    const productLIDOMEl = document.createElement("li");
    productLIDOMEl.innerHTML = `<span>${product.name} -- ${product.price} eur</span>`;

    cartContentsDOMEl.appendChild(productLIDOMEl);
  });
}

cartDOMEl.onclick = displayCartContents;