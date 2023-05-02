localStorage.setItem ("balance", "50")

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
    priceValue -= 50;
    if (priceValue < 0) {
      priceValue = 0;
    }
    price.innerText = priceValue;
  });
  btnPlus.addEventListener("click", function() {
    priceValue += 50;
    price.innerText = priceValue;
  });
}


function removeCartItem(item) {
  item.parentNode.remove();
  cartCount--;
}




function addNumber() {
  var numberInput = document.getElementById("number");
  var number = parseInt(numberInput.value);
  var result = document.getElementById("result");
  result.innerHTML = parseInt(result.innerHTML) + number;

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

