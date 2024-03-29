import { describe, expect, it } from "vitest";
import { addToCart, calculateDiscount, calculateShipping } from "..";

describe("Testing marketplace function", () => {
  it("Should add an item at the cart", () => {
    const result = addToCart(2, 0);
    expect(result).toEqual(expect.any(Number));
  });

  it("Should return the value final with 50% of discount", () => {
    const result = calculateDiscount(5, 50);
    expect(result).toEqual(25);
  });

  it("Shouldnt give discount if the quantity is less than 5", () => {
    const result = calculateDiscount(4, 50);
    expect(result).toEqual(50);
  });

  it("Should give 10% discount if the quantity is greater than 3", () => {
    const result = calculateShipping(4, 50);
    expect(result).toEqual(45);
  });

  it("Should give 10% discount if the quantity is greater than 3", () => {
    const result = calculateShipping(4, 40);
    expect(result).toEqual(36);
  });

  it("Should give 10% discount if the quantity is greater than 3", () => {
    const result = calculateShipping(4, 30);
    expect(result).toEqual(27);
  });

  it("Shouldnt give shipping discount if the quantity is less than 3", () => {
    const result = calculateShipping(2, 50);
    expect(result).toEqual(50);
  });

  // it("Should throw an exception", () => {
  //   expect(() => sumException(2, 6)).throw(SumException);AQUE
  // });
});
