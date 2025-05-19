import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import { expectVariableExplicitTypeAnnotation } from "chai_typescript_type_annotation_tests";

describe("Lab 2 — Section 5: Type Alias", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section5_type_alias.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });
  it("should define a Product type with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("type Product");
    expect(sourceCode).to.match(/type\s+Product/);
    expect(sourceCode).to.match(/id\s*:\s*number/);
    expect(sourceCode).to.match(/name\s*:\s*string/);
    expect(sourceCode).to.match(/price\s*:\s*number/);
  });

  it("should define a variable 'exampleProduct' with correct properties", () => {
    const product = context.exampleProduct;
    expect(product).to.be.an("object");
    expect(product.id).to.be.a("number");
    expect(product.name).to.be.a("string");
    expect(product.price).to.be.a("number");
  });

  it("should define a variable 'exampleProduct' with a type of Product", () => {
    expectVariableExplicitTypeAnnotation(filePath, "exampleProduct", "Product");
  });
});
