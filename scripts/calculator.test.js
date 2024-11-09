import { calculator } from "./calculator.js";

// Calculator tests
test("Numbers are added", () => {
  expect(calculator.add(5, 10)).toEqual(15);
});

test("Numbers are added", () => {
  expect(calculator.add(-5, 10)).toEqual(5);
});

test("Numbers are subtracted", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

test("Numbers are subtracted", () => {
  expect(calculator.subtract(-20, 5)).toEqual(-25);
});

test("Numbers are multiplied", () => {
  expect(calculator.multiply(-20, 5)).toEqual(-100);
});

test("Numbers are multiplied", () => {
  expect(calculator.multiply(25, 4)).toEqual(100);
});

test("Numbers are divided", () => {
  expect(calculator.divide(25, 5)).toEqual(5);
});

test("Numbers are divided", () => {
  expect(calculator.divide(-100, 50)).toEqual(-2);
});

test("Numbers are divided", () => {
  expect(calculator.divide(-100, 0)).toEqual(-Infinity);
});
