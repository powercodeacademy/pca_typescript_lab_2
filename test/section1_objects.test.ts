import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 2 — Section 1: Objects", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section1_objects.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a 'book' object", () => {
    expect(context.book).to.be.an("object");
  });

  it("'book' should have a title, author, and pages", () => {
    expect(context.book.title).to.be.a("string");
    expect(context.book.author).to.be.a("string");
    expect(context.book.pages).to.be.a("number");
  });
});
