---
to: docs/questions/<%= category %>/<%= h.changeCase.camelCase(name) %>.md
---
<<< @/questions/<%= category %>/<%= h.changeCase.camelCase(name) %>/index.ts
<<< @/questions/<%= category %>/<%= h.changeCase.camelCase(name) %>/index.spec.ts

[![Share your answer](https://img.shields.io/badge/Share_your_answer-blue?style=flat)](https://github.com/tyankatsu0105/utility-challenges/issues/new?labels=answer,<%= category %>/<%= h.changeCase.camelCase(name) %>&template=answer.md&title=<%= category %>/<%= h.changeCase.camelCase(name) %>)
[![Check out answers](https://img.shields.io/badge/Check_out_answers-green?style=flat)](https://github.com/tyankatsu0105/utility-challenges/issues?q=is%3Aopen,closed+label%3A<%= category %>/<%= h.changeCase.camelCase(name) %>+label%3Aanswer+)