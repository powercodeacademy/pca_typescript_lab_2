import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 2 — Section 3: Optional Properties", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section3_optional_properties.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a user with a displayName", () => {
    expect(context.userWithName, "variable userWithName is not defined").to
      .exist;
    expect(context.userWithName).to.be.an("object");
    expect(context.userWithName.id).to.be.a("number");
    expect(context.userWithName.email).to.be.a("string");
    expect(context.userWithName.displayName).to.be.a("string");
  });

  it("should define a user without a displayName", () => {
    expect(context.userWithoutName, "variable userWithoutName is not defined")
      .to.exist;
    expect(context.userWithoutName).to.be.an("object");
    expect(context.userWithoutName.id).to.be.a("number");
    expect(context.userWithoutName.email).to.be.a("string");
    expect(context.userWithoutName).to.not.have.property("displayName");
  });
});
