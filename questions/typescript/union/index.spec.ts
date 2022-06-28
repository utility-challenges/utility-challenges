import { union } from "./index";

describe("union", () => {
  it("pass", () => {
    const result = union([1], [1]);

    expect(result).toEqual([1]);
  });

  it("pass", () => {
    const result = union([2, 1], [1]);

    expect(result).toEqual([2, 1]);
  });

  it("pass", () => {
    const result = union([3, 2, 1], [1, 2, 3]);

    expect(result).toEqual([3, 2, 1]);
  });
});
