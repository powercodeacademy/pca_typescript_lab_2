import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import { expectVariableExplicitTypeAnnotation } from "chai_typescript_type_annotation_tests";

describe("Lab 2 — Bonus: UserProfile", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section6_bonus_modelUser.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a Product type with correct keys and types", () => {
    const sourceCode = readFileSync(filePath, "utf8");
    expect(sourceCode).to.include("type UserProfile");
    expect(sourceCode).to.match(/type\s+UserProfile/);
    expect(sourceCode).to.match(/id\s*:\s*number/);
    expect(sourceCode).to.match(/username\s*:\s*string/);
    expect(sourceCode).to.match(/email\s*:\s*string/);
    expect(sourceCode).to.match(/createdAt\s*:\s*string/);
  });

  it("should define a userProfile object with required fields", () => {
    const user = context.userProfile;
    expect(user).to.be.an("object");
    expect(user.id).to.be.a("number");
    expect(user.email).to.be.a("string");
    expect(user.username).to.be.a("string");
    expect(user.createdAt).to.be.a("string");
  });

  it("may optionally include 'bio' and 'avatarUrl'", () => {
    const user = context.userProfile;
    if ("bio" in user) expect(user.bio).to.be.a("string");
    if ("avatarUrl" in user) expect(user.avatarUrl).to.be.a("string");
  });

  expectVariableExplicitTypeAnnotation(filePath, "userProfile", "UserProfile");
});
