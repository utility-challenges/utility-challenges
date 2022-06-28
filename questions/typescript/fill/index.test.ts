import { fill } from "./index";

describe("fill", () => {
  it("pass", () => {
    const ary = [
      1,
      2,
      true,
      "hello",
      {
        id: "A23D565A-258F-4B05-875D-F64E2F8B62D2",
      },
    ];

    const result = fill(ary);

    expect(result).toStrictEqual(ary);
  });

  it("pass", () => {
    const ary = [
      1,
      2,
      true,
      "hello",
      {
        id: "A23D565A-258F-4B05-875D-F64E2F8B62D2",
      },
    ];

    const result = fill(ary, "foo");

    expect(result).toStrictEqual(["foo", "foo", "foo", "foo", "foo"]);
  });
});
