import { pipe } from "./index";

describe("pipe", () => {
  it("pass", () => {
    const plus10 = (n) => n + 10;
    const double = (n) => n * 2;

    const result = pipe(double, plus10)(50);

    expect(result).toBe(110);
  });

  it("pass", () => {
    const plus10 = (n) => n + 10;

    const result = pipe(plus10)(50);

    expect(result).toBe(60);
  });
});
