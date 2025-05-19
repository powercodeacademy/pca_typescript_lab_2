import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import { expectVariableExplicitTypeAnnotation } from "chai_typescript_type_annotation_tests";

describe("Lab 2 — Section 4: Literal Types", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section4_literal_types.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a variable called 'loadingStatus' with a valid literal value", () => {
    const validValues = ["loading", "success", "error"];
    expect(validValues).to.include(context.loadingStatus);
  });

  expectVariableExplicitTypeAnnotation(
    filePath,
    "loadingStatus",
    '"loading" | "success" | "error"'
  );
});
