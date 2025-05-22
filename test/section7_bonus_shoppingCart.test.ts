import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import {
  expectFunctionParameterTypeAnnotation,
  expectFunctionReturnTypeAnnotation,
  expectVariableExplicitTypeAnnotation,
  expectTypeAliasPropertyTypeAnnotation,
} from "chai_typescript_type_annotation_tests";

describe("Lab 2 — Bonus: Shopping Cart", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section7_bonus_shoppingCart.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });
  it("should define a CartItem type with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("type CartItem");
    expect(sourceCode).to.match(/type\s+CartItem/);
    expect(sourceCode).to.match(/productId\s*:\s*number/);
    expect(sourceCode).to.match(/name\s*:\s*string/);
    expect(sourceCode).to.match(/quantity\s*:\s*number/);
    expect(sourceCode).to.match(/price\s*:\s*number/);
  });

  expectTypeAliasPropertyTypeAnnotation(
    filePath,
    "CartItem",
    "productId",
    "number"
  );
  expectTypeAliasPropertyTypeAnnotation(
    filePath,
    "CartItem",
    "name",
    "string"
  );
  expectTypeAliasPropertyTypeAnnotation(
    filePath,
    "CartItem",
    "quantity",
    "number"
  );
  expectTypeAliasPropertyTypeAnnotation(
    filePath,
    "CartItem",
    "price",
    "number"
  );

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

  expectVariableExplicitTypeAnnotation(filePath, "cart", "CartItem[]");

  expectFunctionParameterTypeAnnotation(
    filePath,
    "calculateTotal",
    "cart",
    "CartItem[]"
  );

  expectFunctionReturnTypeAnnotation(filePath, "calculateTotal", "number");
});
