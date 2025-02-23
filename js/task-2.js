function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Canada", 200, 30));
console.log(getShippingMessage("France", 80, 20));
