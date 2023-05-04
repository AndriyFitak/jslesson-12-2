

function saveCartToLocalStorage() {
  var cartItems = document.querySelectorAll("#cart > div");
  var cartItemsData = [];
  for (var i = 0; i < cartItems.length; i++) {
    cartItemsData.push(cartItems[i].innerHTML);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
}

function loadCartFromLocalStorage() {
  var cartItemsData = localStorage.getItem("cartItems");
  if (cartItemsData) {
    var cartItems = JSON.parse(cartItemsData);
    var cart = document.getElementById("cart");
    for (var i = 0; i < cartItems.length; i++) {
      var newCartItem = document.createElement("div");
      newCartItem.innerHTML = cartItems[i];
      cart.appendChild(newCartItem);
      var price = parseInt(newCartItem.querySelector(".price-card").innerText);
      result -= price;
      cartCount++;
    }
  }
}

loadCartFromLocalStorage();
var cartCount = 0;

function addToCart() {
  if (cartCount >= 3) {
    alert("Кошик вже заповнений");
    return;
  }
  var productCard = document.getElementById("product-card");
  var cart = document.getElementById("cart");
  var newCartItem = document.createElement("div");
  var price = document.getElementById("price-card");
  let priceValue = parseInt(price.innerText);
  if (priceValue > result) {
    alert("Недостатьньо коштів");
    console.log(parseInt(price.innerText));
    console.log(typeof price);
    return;
  }
  newCartItem.innerHTML =
    productCard.innerHTML + `<button onclick="removeCartItem(this)">Видалити</button>
    <div class="plus-and-minus">
                <button id="btnMinus" class="minus">-</button>
                <p class="priceText"></p>
                <button id="btnPlus" class="plus">+</button>
            </div> `;
  cart.appendChild(newCartItem);
  result -= priceValue;
  cartCount++;


  let btnMinus = newCartItem.querySelector(".minus");
  let btnPlus = newCartItem.querySelector(".plus");
  let priceText = newCartItem.querySelector(".priceText");
  btnMinus.addEventListener("click", function() {
    priceValue -= 1;
    // if (priceValue < 0) {
    //   priceValue = 0;
    // }
    priceText.innerText = priceValue;
  });
  btnPlus.addEventListener("click", function() {
    priceValue += 1;
    priceText.innerText = priceValue;
  });
  saveCartToLocalStorage();
}


function removeCartItem(item) {
  item.parentNode.remove();
  cartCount--;
  saveCartToLocalStorage();
}

function addNumber() {
  var numberInput = document.getElementById("number");
  var number = parseInt(numberInput.value);
  var result = document.getElementById("result");
  result.innerHTML = parseInt(result.innerHTML) + number;
  localStorage.setItem('result', result.innerHTML);

  var counter = 0;
  while (counter < 3) {
    var complate = prompt("Введіть email та пароль:");
    if (complate === "asd asd") {
      alert("Успішний вхід!");
      break;
    } else {
      alert("Невірний логін або пароль")
    }
    counter++;
    numberInput.value = ''
  }
}

function clearBalance() {
  var result = document.getElementById("result");
  result.innerHTML = "0";
  localStorage.removeItem('result');
}
 
window.onload = function() {
  var result = document.getElementById("result");
  var savedResult = localStorage.getItem('result');
  if (savedResult) {
    result.innerHTML = savedResult;
  }
}


