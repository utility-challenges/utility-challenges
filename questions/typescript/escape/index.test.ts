import { escape } from "./index";

describe("escape", () => {
  it("pass", () => {
    const str = "&";

    const result = escape(str);

    expect(result).toBe("&amp;");
  });

  it("pass", () => {
    const str = '"';

    const result = escape(str);

    expect(result).toBe("&quot;");
  });

  it("pass", () => {
    const str = "'";

    const result = escape(str);

    expect(result).toBe("&#39;");
  });

  it("pass", () => {
    const str = "<";

    const result = escape(str);

    expect(result).toBe("&lt;");
  });

  it("pass", () => {
    const str = ">";

    const result = escape(str);

    expect(result).toBe("&gt;");
  });
});
