import { intersection } from "./index";

describe("intersection", () => {
  it("pass", () => {
    const ary1 = [1, 2, 3];
    const ary2 = [3, 1];
    const ary3 = [4, 1, 3, 7];

    const result = intersection(ary1, ary2, ary3);

    expect(result).toStrictEqual([1, 3]);
  });
});
