---
to: questions/<%= category %>/<%= h.changeCase.camelCase(name) %>/index.test.ts
---
import { <%= h.changeCase.camelCase(name) %> } from "./index";

describe("<%= h.changeCase.camelCase(name) %>", () => {
  it("pass", () => {
    const result = <%= h.changeCase.camelCase(name) %>();

    expect(result).toBe();
  });
});
