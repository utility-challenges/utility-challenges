---
to: questions/<%= category %>/<%= h.changeCase.pascalCase(name) %>/index.spec.ts
---
import { <%= h.changeCase.pascalCase(name) %> } from "./index";

describe("<%= h.changeCase.pascalCase(name) %>", () => {
  it("pass", () => {
    const result = <%= h.changeCase.pascalCase(name) %>();

    expect(result).toBe();
  });
});
