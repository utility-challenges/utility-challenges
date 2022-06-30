import { size } from "./index";

describe("size", () => {
  it("pass", () => {
    const result = size([1, 2, 3]);

    expect(result).toBe(3);
  });

  it("pass", () => {
    const result = size({ a: 1, b: 1, c: 1, d: 1, e: 1 });

    expect(result).toBe(5);
  });

  it("pass", () => {
    const result = size("some string");

    expect(result).toBe(11);
  });

  it("pass", () => {
    const result = size("🎉");

    expect(result).toBe(2);
  });
});
