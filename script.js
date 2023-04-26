function addToCart() {
    var productCard = document.getElementById("product-card");
    var cart = document.getElementById("cart");
    var newCartItem = document.createElement("div");
    newCartItem.innerHTML = productCard.innerHTML + '<button onclick="removeCartItem(this)">Видалити</button>';
    cart.appendChild(newCartItem);
  }

  function removeCartItem(item) {
    item.parentNode.remove();
  }