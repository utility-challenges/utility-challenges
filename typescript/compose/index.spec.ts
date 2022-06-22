import { compose } from "./index";

describe("compose", () => {
  it("pass", () => {
    const plus10 = (n) => n + 10;
    const double = (n) => n * 2;

    const result = compose(double, plus10)(50);

    expect(result).toBe(120);
  });

  it("pass", () => {
    const plus10 = (n) => n + 10;

    const result = compose(plus10)(50);

    expect(result).toBe(60);
  });
});
