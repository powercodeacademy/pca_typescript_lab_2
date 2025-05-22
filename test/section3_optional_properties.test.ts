import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import {
  expectVariableExplicitTypeAnnotation,
  expectTypeAliasPropertyTypeAnnotation,
} from "chai_typescript_type_annotation_tests";

describe("Lab 2 — Section 3: Optional Properties", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section3_optional_properties.ts");
  const tsCode = readFileSync(filePath, "utf8");
  before(() => {
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a User type with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("type User");
    expect(sourceCode).to.match(/type\s+User/);
    expect(sourceCode).to.match(/id\s*:\s*number/);
    expect(sourceCode).to.match(/email\s*:\s*string/);
    expect(sourceCode).to.match(/displayName\s*\?:\s*string/);
  });

  expectTypeAliasPropertyTypeAnnotation(filePath, "User", "id", "number");
  expectTypeAliasPropertyTypeAnnotation(filePath, "User", "email", "string");
  expectTypeAliasPropertyTypeAnnotation(
    filePath,
    "User",
    "displayName",
    "string"
  );

  it("should define a user with a displayName", () => {
    expect(context.userWithName, "variable userWithName is not defined").to
      .exist;
    expect(context.userWithName).to.be.an("object");
    expect(context.userWithName.id).to.be.a("number");
    expect(context.userWithName.email).to.be.a("string");
    expect(context.userWithName.displayName).to.be.a("string");
  });

  expectVariableExplicitTypeAnnotation(filePath, "userWithName", "User");

  it("should define a user without a displayName", () => {
    expect(context.userWithoutName, "variable userWithoutName is not defined")
      .to.exist;
    expect(context.userWithoutName).to.be.an("object");
    expect(context.userWithoutName.id).to.be.a("number");
    expect(context.userWithoutName.email).to.be.a("string");
    expect(context.userWithoutName).to.not.have.property("displayName");
  });
  expectVariableExplicitTypeAnnotation(filePath, "userWithoutName", "User");
});
