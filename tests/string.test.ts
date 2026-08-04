import { describe, expect, it } from "vitest";
import { capitalize, slugify, camelCase } from "../src";

describe("capitalize", () => {
  it("should capitalize the first letter", () => {
    expect(capitalize("rahul")).toBe("Rahul");
  });

  it("should return empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
describe("slugify", () => {
  it("converts spaces to hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(slugify("Hello @ World!")).toBe("hello-world");
  });

  it("trims spaces", () => {
    expect(slugify("  Hello World  ")).toBe("hello-world");
  });
});
describe("camelCase", () => {
  it("converts spaces to camelCase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  it("handles hyphens", () => {
    expect(camelCase("hello-world")).toBe("helloWorld");
  });

  it("handles underscores", () => {
    expect(camelCase("hello_world")).toBe("helloWorld");
  });

  it("handles empty strings", () => {
    expect(camelCase("")).toBe("");
  });
});