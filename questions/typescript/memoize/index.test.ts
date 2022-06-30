import { memoize } from "./index";

type Func = (value1: number, value2: number) => number;

describe("memoize", () => {
  let func: Func;
  let mockedFunc: Func;
  let memoized: Func;

  beforeEach(() => {
    func = jest
      .fn()
      .mockImplementation(
        (value1: number, value2: number): number => value1 + value2
      );
    mockedFunc = jest
      .fn()
      .mockImplementation(
        (value1: number, value2: number): number => value1 + value2
      );
    memoized = memoize(mockedFunc);
  });

  it("pass", () => {
    expect(func(1, 2)).toBe(3);

    expect(memoized(1, 2)).toBe(3);
  });

  it("pass", () => {
    expect(func(1, 2)).toBe(3);
    expect(func(1, 2)).toBe(3);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
  });

  it("pass", () => {
    func(1, 2);

    expect(func).toHaveBeenCalledTimes(1);

    memoized(1, 2);

    expect(mockedFunc).toHaveBeenCalledTimes(1);
  });

  it("pass", () => {
    func(1, 2);
    func(1, 2);

    expect(func).toHaveBeenCalledTimes(2);

    memoized(1, 2);
    memoized(1, 2);

    expect(mockedFunc).toHaveBeenCalledTimes(1);
  });

  it("pass", () => {
    func(1, 2);
    func(3, 4);

    expect(func).toHaveBeenCalledTimes(2);

    memoized(1, 2);
    memoized(3, 4);

    expect(mockedFunc).toHaveBeenCalledTimes(2);
  });
});
