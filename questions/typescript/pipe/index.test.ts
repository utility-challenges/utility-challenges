import { pipe } from "./index";

describe("pipe", () => {
  it("pass", () => {
    const plus10 = (n: number) => n + 10;
    const double = (n: number) => n * 2;
    const plus20 = (n: number) => n + 20;

    const result = pipe(double, plus10, plus20)(50);

    expect(result).toBe(130);
  });

  it("pass", () => {
    const plus10 = (n: number) => n + 10;

    const result = pipe(plus10)(50);

    expect(result).toBe(60);
  });
});
