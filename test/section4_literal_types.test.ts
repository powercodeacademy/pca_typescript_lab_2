import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 2 — Section 4: Literal Types", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section4_literal_types.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a variable called 'loadingStatus' with a valid literal value", () => {
    const validValues = ["loading", "success", "error"];
    expect(validValues).to.include(context.loadingStatus);
  });
});
