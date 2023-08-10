import { add, subtract, multiply, divide } from "./index.js";

// add()
test("add() should return the sum of two positive numbers", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add() should return a negative value if the greater argument is negative", () => {
  const result = add(-1, -2);
  expect(result).toBeLessThan(0);
});

test("add() should return a value close to 0.3 when adding 0.1 and 0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});
// subtract()
test("subtract() should return the result of subtracting two numbers", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() should return a negative value if the second argument is greater", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

//multiply()

test("multiply() should return the multiply of two positive numbers", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() should return a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("multiply() should return a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("multiply() should return a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBe(8);
});

// divide()

test("divide() should return the divide of two positive numbers", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide() should return 'You should not do this!' when dividing by 0", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
