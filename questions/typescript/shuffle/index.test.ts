import { shuffle } from "./index";

describe("shuffle", () => {
  for (let index = 0; index < 100; index++) {
    it("pass", () => {
      const result = shuffle([1, 2]);

      expect(result).not.toEqual([1, 2]);
    });
  }

  it("pass", () => {
    const result = shuffle([1, 2, 3, 4]);

    expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4]));
  });
});
