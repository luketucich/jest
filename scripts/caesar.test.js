import { caesarCipher } from "./caesar.js";

test("Shifts each char by 3", () => {
  expect(caesarCipher("xyz", 3)).toMatch(/abc/);
});

test("Shifts each char by 3", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch(/KhOOr/);
});

test("Shifts each char by 3", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch(/Khoor, Zruog!/);
});
