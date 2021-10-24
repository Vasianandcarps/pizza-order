let order = prompt("order");
let orders = ["1", "2"];
let str = "Your order:";
function orderingPizza(...orders) {
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
  }
  return str;
}
document.write(orderingPizza(order, order));
