import { describe, expect, it } from "vitest";

import {
  hasNumbers,
  hasSymbols,
  hasLetters,
  hasUppercase,
  hasLowercase,
  hasWhitespace,
  hasEmoji,
  hasOnlyNumbers,
  hasOnlyLetters,
  hasOnlyAlphanumeric,
} from "../src/functions/charachters.ts";

// =====================================
// hasNumbers
// =====================================

describe("hasNumbers", () => {
  it.each([
    "123",
    "abc123",
    "123abc",
    "abc1def",
    "0",
    "9",
    "00000",
    "Hello 123!",
    "😀123",
    "\n1\t",
  ])("returns true for %j", (input) => {
    expect(hasNumbers(input)).toBe(true);
  });

  it.each([
    "",
    "abc",
    "ABC",
    "Hello World",
    "!@#$%",
    " ",
    "\n\t",
    "😀",
    "１２３", // Fullwidth Unicode digits
    "١٢٣", // Arabic-Indic digits
    "²",   // Superscript number
  ])("returns false for %j", (input) => {
    expect(hasNumbers(input)).toBe(false);
  });
});

// =====================================
// hasSymbols
// =====================================

describe("hasSymbols", () => {
  it.each([
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    ".",
    ",",
    "?",
    "/",
    "\\",
    "Hello!",
    "test@example.com",
    "hello-world",
    "hello_world",
    "123.456",
    "😀",
    "🚀",
    "©",
    "€",
  ])("returns true for %j", (input) => {
    expect(hasSymbols(input)).toBe(true);
  });

  it.each([
    "",
    "abc",
    "ABC",
    "123",
    "abc123",
    "Hello World",
    " ",
    "\n",
    "\t",
    "Äpfel",
    "日本語",
    "١٢٣",
  ])("returns false for %j", (input) => {
    expect(hasSymbols(input)).toBe(false);
  });
});

// =====================================
// hasLetters
// =====================================

describe("hasLetters", () => {
  it.each([
    "abc",
    "ABC",
    "a",
    "Z",
    "abc123",
    "123abc",
    "Hello!",
    "Hello World",
    "Äpfel",
    "é",
    "日本語",
    "Привет",
    "مرحبا",
    "😀a",
    "a\n",
  ])("returns true for %j", (input) => {
    expect(hasLetters(input)).toBe(true);
  });

  it.each([
    "",
    "123",
    "000",
    "!@#$%",
    " ",
    "\n",
    "\t",
    "😀",
    "🚀",
    "123.456",
    "\u0301", // Combining accent alone
  ])("returns false for %j", (input) => {
    expect(hasLetters(input)).toBe(false);
  });
});

// =====================================
// hasUppercase
// =====================================

describe("hasUppercase", () => {
  it.each([
    "A",
    "Z",
    "HELLO",
    "Hello",
    "helloWorld",
    "abcAabc",
    "ABC123",
    "A!",
    "Äpfel",
    "École",
    "Привет",
    "😀A",
  ])("returns true for %j", (input) => {
    expect(hasUppercase(input)).toBe(true);
  });

  it.each([
    "",
    "abc",
    "hello",
    "123",
    "abc123",
    "!@#$",
    " ",
    "😀",
    "é",
    "äpfel",
    "日本語", // Uncased letters
    "مرحبا", // Uncased letters
  ])("returns false for %j", (input) => {
    expect(hasUppercase(input)).toBe(false);
  });
});

// =====================================
// hasLowercase
// =====================================

describe("hasLowercase", () => {
  it.each([
    "a",
    "z",
    "hello",
    "Hello",
    "HELLOworld",
    "ABCd",
    "abc123",
    "a!",
    "äpfel",
    "école",
    "привет",
    "😀a",
  ])("returns true for %j", (input) => {
    expect(hasLowercase(input)).toBe(true);
  });

  it.each([
    "",
    "ABC",
    "HELLO",
    "123",
    "123!",
    "!@#$",
    " ",
    "😀",
    "Ä",
    "É",
    "日本語",
    "مرحبا",
  ])("returns false for %j", (input) => {
    expect(hasLowercase(input)).toBe(false);
  });
});

// =====================================
// hasWhitespace
// =====================================

describe("hasWhitespace", () => {
  it.each([
    " ",
    "Hello World",
    " leading",
    "trailing ",
    "\t",
    "Hello\tWorld",
    "\n",
    "Hello\nWorld",
    "\r",
    "\r\n",
    "\v",
    "\f",
    "\u00A0", // Non-breaking space
    "\u2003", // Em space
    "\u2028", // Line separator
    "\u3000", // Ideographic space
  ])("returns true for %j", (input) => {
    expect(hasWhitespace(input)).toBe(true);
  });

  it.each([
    "",
    "HelloWorld",
    "abc123",
    "!@#$",
    "😀",
    "_",
    "-",
    "\u200B", // Zero-width space (not JS \s)
    "\u200D", // Zero-width joiner
    "\0",
  ])("returns false for %j", (input) => {
    expect(hasWhitespace(input)).toBe(false);
  });
});

// =====================================
// hasEmoji
// =====================================

describe("hasEmoji", () => {
  it.each([
    "😀",
    "😂",
    "🚀",
    "🎨",
    "❤️",
    "👍",
    "👍🏽",
    "👨‍👩‍👧‍👦",
    "👩‍💻",
    "🏳️‍🌈",
    "🇩🇪",
    "🇺🇸",
    "1️⃣",
    "#️⃣",
    "Hello 😀",
    "abc🚀123",
  ])("returns true for %j", (input) => {
    expect(hasEmoji(input)).toBe(true);
  });

  it.each([
    "",
    "abc",
    "ABC",
    "123",
    "Hello World",
    " ",
    "\n",
    "!@#$",
    "äöü",
    "日本語",
    "1",
    "#",
    "*",
  ])("returns false for %j", (input) => {
    expect(hasEmoji(input)).toBe(false);
  });
});

// =====================================
// hasOnlyNumbers
// =====================================

describe("hasOnlyNumbers", () => {
  it.each([
    "0",
    "1",
    "9",
    "123",
    "01234",
    "000000",
    "999999",
    "1234567890",
  ])("returns true for %j", (input) => {
    expect(hasOnlyNumbers(input)).toBe(true);
  });

  it.each([
    "",
    "abc",
    "abc123",
    "123abc",
    "12a34",
    "12 34",
    " 123",
    "123 ",
    "12\n34",
    "-123",
    "+123",
    "12.34",
    "1,000",
    "1_000",
    "😀123",
    "１２３",
    "١٢٣",
    "²",
  ])("returns false for %j", (input) => {
    expect(hasOnlyNumbers(input)).toBe(false);
  });
});

// =====================================
// hasOnlyLetters
// =====================================

describe("hasOnlyLetters", () => {
  it.each([
    "a",
    "Z",
    "abc",
    "ABC",
    "HelloWorld",
    "Äpfel",
    "école",
    "日本語",
    "Привет",
    "مرحبا",
  ])("returns true for %j", (input) => {
    expect(hasOnlyLetters(input)).toBe(true);
  });

  it.each([
    "",
    "123",
    "abc123",
    "123abc",
    "Hello World",
    " hello",
    "hello ",
    "Hello!",
    "hello-world",
    "hello_world",
    "hello.world",
    "a\nb",
    "a\tb",
    "😀",
    "Hello😀",
    "\u0301",
    "e\u0301", // Decomposed é
  ])("returns false for %j", (input) => {
    expect(hasOnlyLetters(input)).toBe(false);
  });
});

// =====================================
// hasOnlyAlphanumeric
// =====================================

describe("hasOnlyAlphanumeric", () => {
  it.each([
    "a",
    "Z",
    "0",
    "9",
    "abc",
    "ABC",
    "123",
    "abc123",
    "123abc",
    "HelloWorld123",
    "Äpfel123",
    "日本語123",
    "Привет123",
  ])("returns true for %j", (input) => {
    expect(hasOnlyAlphanumeric(input)).toBe(true);
  });

  it.each([
    "",
    " ",
    "abc 123",
    " hello",
    "hello ",
    "hello!",
    "abc-123",
    "abc_123",
    "abc.123",
    "abc@123",
    "abc\n123",
    "abc\t123",
    "😀",
    "abc😀123",
    "123.45",
    "-123",
    "e\u0301",
    "１２３",
    "١٢٣",
  ])("returns false for %j", (input) => {
    expect(hasOnlyAlphanumeric(input)).toBe(false);
  });
});