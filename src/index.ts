export function addToCart(quantity: number, itemsCart: number) {
  if (quantity >= 1) {
    itemsCart += quantity;
  }
  return itemsCart;
}

export function calculateDiscount(quantity: number, totalValue: number) {
  if (quantity >= 5) {
    totalValue *= 0.5;
  }
  return totalValue;
}

export function calculateShipping(quantity: number, shipping: number) {
  if (quantity >= 3) {
    shipping *= 0.9;
  }
  return shipping;
}

// export function sumException(a: number, b: number) {
//   throw new SumException();
// }
