import { create_array } from "./index";

describe("create_array", () => {
  it("pass", () => {
    const result = create_array(100);

    expect(result.length).toBe(100);
  });

  it("pass", () => {
    const result = create_array(100);

    result.forEach((v) => {
      expect(v).toBeUndefined();
    });
  });

  it("pass", () => {
    const result = create_array(100, "hello");

    result.forEach((v) => {
      expect(v).toBe("hello");
    });
  });
});
