import { xor } from "./index";

describe("xor", () => {
  it("pass", () => {
    const result = xor([1, 2, 3], [1, 2, 3]);

    expect(result).toEqual([]);
  });

  it("pass", () => {
    const result = xor([1, 2, 3], [1, 2, 3], [1, 2, 3]);

    expect(result).toEqual([1, 2, 3]);
  });

  it("pass", () => {
    const result = xor([1, 1], [2, 2], [1, 2]);

    expect(result).toEqual([1, 2]);
  });

  it("pass", () => {
    const result = xor([2, 1], [2, 3]);

    expect(result).toEqual([1, 3]);
  });

  it("pass", () => {
    const result = xor([2, 1], [2, 3], [6, 2, 4]);

    expect(result).toEqual([1, 3, 6, 2, 4]);
  });
});
