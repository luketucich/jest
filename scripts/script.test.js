import { capitalize, reverseString } from "./script.js";

// Capitalize tests
test("Only first char is capitalized", () => {
  expect(capitalize("john")).toMatch(/John/);
});

test("Only first char is capitalized", () => {
  expect(capitalize("HELLO")).toMatch(/Hello/);
});

test("Only first char is capitalized", () => {
  expect(capitalize("jOhN")).toMatch(/John/);
});

// Reverse String tests
test("String is reversed", () => {
  expect(reverseString("racecar")).toMatch(/racecar/);
});

test("String is reversed", () => {
  expect(reverseString("Bertha")).toMatch(/ahtreB/);
});

test("String is reversed", () => {
  expect(reverseString("LUKE")).toMatch(/EKUL/);
});
