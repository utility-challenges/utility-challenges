import { noop } from "./index";

describe("noop", () => {
  it("pass", () => {
    const result = noop();

    expect(result).toBe();
  });
});
