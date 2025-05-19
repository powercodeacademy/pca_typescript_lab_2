import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import { expectVariableExplicitTypeAnnotation } from "chai_typescript_type_annotation_tests";

describe("Lab 2 — Section 2: Arrays", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section2_arrays.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define an array of strings called 'colors'", () => {
    expect(context.colors).to.be.an("array");
    expect(context.colors.every((c: any) => typeof c === "string")).to.equal(
      true
    );
  });
  expectVariableExplicitTypeAnnotation(filePath, "colors", "string[]");

  it("should define an array of numbers called 'ages'", () => {
    expect(context.ages).to.be.an("array");
    expect(context.ages.every((a: any) => typeof a === "number")).to.equal(
      true
    );
  });

  expectVariableExplicitTypeAnnotation(filePath, "ages", "number[]");

  it("should define an array of student objects with name and grade", () => {
    expect(context.students).to.be.an("array");
    context.students.forEach((s: any) => {
      expect(s.name).to.be.a("string");
      expect(s.grade).to.be.a("number");
    });
  });

  expectVariableExplicitTypeAnnotation(filePath, "students", "Student[]");
});
