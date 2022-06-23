---
to: questions/<%= category %>/<%= h.changeCase.snakeCase(name) %>/index.spec.ts
---
import { <%= h.changeCase.snakeCase(name) %> } from "./index";

describe("<%= h.changeCase.snakeCase(name) %>", () => {
  it("pass", () => {
    const result = <%= h.changeCase.snakeCase(name) %>();

    expect(result).toBe();
  });
});
