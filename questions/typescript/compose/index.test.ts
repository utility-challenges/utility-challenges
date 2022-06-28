import { compose } from "./index";

describe("compose", () => {
  it("pass", () => {
    const plus10 = (n: number) => n + 10;
    const double = (n: number) => n * 2;
    const plus20 = (n: number) => n + 20;

    const result = compose(double, plus10, plus20)(50);

    expect(result).toBe(160);
  });

  it("pass", () => {
    const plus10 = (n: number) => n + 10;

    const result = compose(plus10)(50);

    expect(result).toBe(60);
  });
});
