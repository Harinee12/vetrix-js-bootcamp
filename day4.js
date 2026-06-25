function tax(price, taxRate) {
  return price + (price * taxRate) / 100;
}

let phone = tax(45000, 18);
let shirt = tax(1200, 5);
let grocery = tax(750, 2);

console.log("Total phone cost is ₹" + phone);
console.log("Total shirt cost is ₹" + shirt);
console.log("Total grocery cost is ₹" + grocery);
