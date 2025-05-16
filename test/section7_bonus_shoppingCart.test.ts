import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 2 — Bonus: Shopping Cart", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section7_bonus_shoppingCart.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a cart array with at least one CartItem", () => {
    const cart = context.cart;
    expect(cart).to.be.an("array");
    expect(cart.length).to.be.greaterThan(0);
    cart.forEach((item: any) => {
      expect(item.productId).to.be.a("number");
      expect(item.name).to.be.a("string");
      expect(item.quantity).to.be.a("number");
      expect(item.price).to.be.a("number");
    });
  });

  it("should correctly calculate total using calculateTotal function", () => {
    const total = context.calculateTotal(context.cart);
    const expected = context.cart.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );
    expect(total).to.equal(expected);
  });
});
