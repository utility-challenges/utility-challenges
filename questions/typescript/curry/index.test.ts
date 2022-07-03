import { curry } from "./index";

const fn = (a: number, b: number, c: number) => [a, b, c];

describe("curry", () => {
  it("pass", () => {
    const curried = curry(fn);

    expect(curried(1)(2)(3)).toEqual([1, 2, 3]);
  });

  it("pass", () => {
    const curried = curry(fn);

    expect(curried(1, 2)(3)).toEqual([1, 2, 3]);
  });

  it("pass", () => {
    const curried = curry(fn);

    expect(curried(1, 2, 3)).toEqual([1, 2, 3]);
  });
});
