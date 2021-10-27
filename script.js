let orders = ["1", "2"];
let n = prompt("Number of pizzas");

let str = "Your order:";
function orderingPizza(...orders) {
  let sum = 0;

  for (let i = 0; i < orders.length; i++) {
    switch (orders[i]) {
      case "1":
        str += "Pizza with mushrooms";
        break;
      case "2":
        str += "Pizza with chicken and pinapple";
        break;
      default:
        alert("Try again");
    }
    sum += 1;
  }
  str += " " + sum;
  return str;
}
for (let i = 0; i < n; i++) {
  let order = prompt("order");
  document.write(orderingPizza(order));
}

