import {it,describe,expect} from "vitest"

import {
  minLength,
  maxLength
} from "../src/functions/lentgh"

describe("minLength", () => {
  describe("valid inputs", () => {
    it.each([
      ["Hello", 5],
      ["Hello World", 5],
      ["a", 1],
      ["123456", 3],
      ["", 0],
      ["😀", 1],
      ["日本語", 3],
    ])("returns true for %j with minimum %i", (str: string, min: number) => {
      expect(minLength(str, min)).toBe(true);
    });
  });

  describe("invalid inputs", () => {
    it.each([
      ["Hello", 6],
      ["abc", 5],
      ["", 1],
      ["a", 2],
      ["123", 4],
      ["😀", 2],
    ])("returns false for %j with minimum %i", (str: string, min: number) => {
      expect(minLength(str, min)).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("should count emoji as one character", () => {
      expect(minLength("😀", 1)).toBe(true);
      expect(minLength("😀", 2)).toBe(false);
    });

    it("should reject negative minimum lengths", () => {
      expect(() => minLength("Hello", -1)).toThrow();
    });

    it("should reject non-integer minimum lengths", () => {
      expect(() => minLength("Hello", 1.5)).toThrow();
    });
  });
});

describe("maxLength", () => {
  describe("valid inputs", () => {
    it.each([
      ["Hello", 6],
      ["Hello World", 15],
      ["a", 1],
      ["123456", 10],
      ["", 0],
      ["😀", 1],
      ["日本語", 10],
    ])("returns true for %j with maximum %i", (str: string, max: number) => {
      expect(maxLength(str, max)).toBe(true);
    });
  });

  describe("invalid inputs", () => {
    it.each([
      ["Hello", 3],
      ["abc", 2],
      ["a", 0 ],
      ["123", 2],
    ])("returns false for %j with maximum %i", (str: string, max: number) => {
      expect(maxLength(str, max)).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("should count emoji as one character", () => {
      expect(maxLength("😀", 1)).toBe(true);
      expect(maxLength("😀", 2)).toBe(true);
    });

    it("should reject negative maximum lengths", () => {
      expect(() => maxLength("Hello", -1)).toThrow();
    });

    it("should reject non-integer maximum lengths", () => {
      expect(() => maxLength("Hello", 1.5)).toThrow();
    });
  });
});