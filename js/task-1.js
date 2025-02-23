function makeTransaction(quantity, pricePerOrder) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerOrder
  } credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
