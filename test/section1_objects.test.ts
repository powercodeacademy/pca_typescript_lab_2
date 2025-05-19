import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import { expectVariableExplicitTypeAnnotation } from "../explicit_type_annotation";

describe("Lab 2 — Section 1: Objects", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section1_objects.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a 'book' object", () => {
    expect(context.book).to.be.an("object");
  });

  expectVariableExplicitTypeAnnotation(filePath, "book", "Book");

  it("'book' should have a title, author, and pages", () => {
    expect(context.book.title).to.be.a("string");
    expect(context.book.author).to.be.a("string");
    expect(context.book.pages).to.be.a("number");
  });
});
