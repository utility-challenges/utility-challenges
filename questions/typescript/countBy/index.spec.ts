import { countBy } from "./index";

describe("countBy", () => {
  it("pass", () => {
    const result = countBy([6.1, 4.2, 6.3], Math.floor);

    expect(result).toEqual({ "4": 1, "6": 2 });
  });

  it("pass", () => {
    const result = countBy(["one", "two", "three"], "length");

    expect(result).toEqual({ "3": 2, "5": 1 });
  });
});
