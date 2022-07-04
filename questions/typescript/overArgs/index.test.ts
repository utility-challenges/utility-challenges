import { overArgs } from "./index";

const square = (n: number) => n * n;
const doubled = (n: number) => n * 2;
const sayHello = (name: string, age: number) =>
  `Hello, I'm ${name}. ${age} years old.`;
const add10 = (n: number) => n + 10;
const getUser = (user: { id: string; name: string; age: number }) => user;

describe("overArgs", () => {
  it("pass", () => {
    const fn = overArgs(
      (a, b, c, d, e) => [a, b, c, d, e],
      [square, doubled, sayHello, add10, getUser]
    );

    const result = fn(10, 20, "John", 28, 50, {
      name: "foo",
      age: 50,
      id: "id",
    });

    expect(result).toEqual([
      100,
      40,
      "Hello, I'm John. 28 years old.",
      60,
      {
        name: "foo",
        age: 50,
        id: "id",
      },
    ]);
  });
});
