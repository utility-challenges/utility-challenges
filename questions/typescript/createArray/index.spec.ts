import { createArray } from "./index";

describe("createArray", () => {
  it("pass", () => {
    const result = createArray(100);

    expect(result.length).toBe(100);
  });

  it("pass", () => {
    const result = createArray(100);

    result.forEach((v) => {
      expect(v).toBeUndefined();
    });
  });

  it("pass", () => {
    const result = createArray(100, "hello");

    result.forEach((v) => {
      expect(v).toBe("hello");
    });
  });
});
