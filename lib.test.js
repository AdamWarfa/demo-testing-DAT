import lib from "./lib";
import fizzBuzz from "./fizzbuzz.js";

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Yussio");
    expect(result).toMatch(/Yussio/);
    expect(result).toContain("Yussio");
  });
});

describe("getCurrencies", () => {
  it("should return the supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  const result = lib.getProduct(1);
  expect(result).toMatchObject({ id: 1, price: 10 });
  expect(result).toHaveProperty("id", 1);
  expect(result).toHaveProperty("price", 10);
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });
});

describe("applyDiscount", () => {});

describe("fizzBuzz", () => {
  it("should throw an exception if input is not a number", () => {
    const args = ["a", null, undefined, {}, false];
    args.forEach((a) => {
      expect(() => {
        fizzBuzz(a);
      }).toThrow();
    });
  });

  it("should return FizzBuzz if input is divisible by 3 and 5", () => {
    const args = [15, 30, 45];
    args.forEach((a) => expect(fizzBuzz(a)).toBe("FizzBuzz"));
  });

  it("should return Fizz if input is only divisible by 3", () => {
    const args = [3, 6, 9, 12];
    args.forEach((a) => expect(fizzBuzz(a)).toBe("Fizz"));
  });

  it("should return Buzz if input is only divisible by 5", () => {
    const args = [5, 10, 20, 25];
    args.forEach((a) => expect(fizzBuzz(a)).toBe("Buzz"));
  });

  it("should return input if input is not divisible by 3 or 5", () => {
    const args = [1, 2, 4, 7, 8, 11, 13, 14];
    args.forEach((a) => expect(fizzBuzz(a)).toBe(a));
  });
});
