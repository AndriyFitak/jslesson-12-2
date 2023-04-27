localStorage.setItem ("balance", "50")


function addToCart() {
    var productCard = document.getElementById("product-card");
    var cart = document.getElementById("cart");
    var newCartItem = document.createElement("div");
    var price = document.getElementById("price-card")
    let priceValue = parseInt(price.innerText)
    if (priceValue > result){
      alert("Недостатьньо коштів")
      console.log (parseInt(price.innerText))
      console.log (typeof(price))
      return 
    } 
    newCartItem.innerHTML = productCard.innerHTML + '<button onclick="removeCartItem(this)">Видалити</button>';
    cart.appendChild(newCartItem);
    result -= price
    result.innerHTML =  "Баланс: $" + result;
    result.innerText = priceValue - price
  }

function removeCartItem(item) {
  item.parentNode.remove();
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