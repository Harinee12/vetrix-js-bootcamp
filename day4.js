function calculateTax(price, taxRate) {
    let totalPrice = price + (price * taxRate / 100);
    return totalPrice;
}

let phonePrice = calculateTax(50000, 18);
let shirtPrice = calculateTax(1000, 5);
let groceryPrice = calculateTax(2000, 12);

console.log("Phone price with tax: ₹" + phonePrice);
console.log("Shirt price with tax: ₹" + shirtPrice);
console.log("Grocery price with tax: ₹" + groceryPrice);