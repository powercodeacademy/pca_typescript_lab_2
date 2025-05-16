import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 2 — Section 5: Type Alias", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section5_type_alias.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a variable 'exampleProduct' with correct properties", () => {
    const product = context.exampleProduct;
    expect(product).to.be.an("object");
    expect(product.id).to.be.a("number");
    expect(product.name).to.be.a("string");
    expect(product.price).to.be.a("number");
  });
});
