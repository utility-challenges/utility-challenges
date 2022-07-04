import { castArray } from "./index";

describe("castArray", () => {
  it("pass", () => {
    const result = castArray(1);

    expect(result).toEqual([1]);
  });

  it("pass", () => {
    const result = castArray({ a: 1 });

    expect(result).toEqual([{ a: 1 }]);
  });

  it("pass", () => {
    const result = castArray("abc");

    expect(result).toEqual(["abc"]);
  });

  it("pass", () => {
    const result = castArray(null);

    expect(result).toEqual([null]);
  });

  it("pass", () => {
    const result = castArray(undefined);

    expect(result).toEqual([undefined]);
  });

  it("pass", () => {
    const result = castArray([]);

    expect(result).toEqual([]);
  });
});
