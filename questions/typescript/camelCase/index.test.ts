import { camelCase } from "./index";

describe("camelCase", () => {
  it("pass", () => {
    const str = "";

    const result = camelCase(str);

    expect(result).toBe("");
  });

  it("pass", () => {
    const str = "foo";

    const result = camelCase(str);

    expect(result).toBe("foo");
  });

  it("pass", () => {
    const str = "Foo Bar";

    const result = camelCase(str);

    expect(result).toBe("fooBar");
  });

  it("pass", () => {
    const str = "--foo-bar--";

    const result = camelCase(str);

    expect(result).toBe("fooBar");
  });

  it("pass", () => {
    const str = "__FOO_BAR__";

    const result = camelCase(str);

    expect(result).toBe("fooBar");
  });

  it("pass", () => {
    const str = "__1FOO_BAR1__";

    const result = camelCase(str);

    expect(result).toBe("1fooBar1");
  });
});
