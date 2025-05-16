import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 2 — Section 2: Arrays", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section2_arrays.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define an array of strings called 'colors'", () => {
    expect(context.colors).to.be.an("array");
    expect(context.colors.every((c: any) => typeof c === "string")).to.equal(true);
  });

  it("should define an array of numbers called 'ages'", () => {
    expect(context.ages).to.be.an("array");
    expect(context.ages.every((a: any) => typeof a === "number")).to.equal(true);
  });

  it("should define an array of student objects with name and grade", () => {
    expect(context.students).to.be.an("array");
    context.students.forEach((s: any) => {
      expect(s.name).to.be.a("string");
      expect(s.grade).to.be.a("number");
    });
  });
});
