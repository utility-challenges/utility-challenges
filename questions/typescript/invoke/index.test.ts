import { invoke } from "./index";

describe("invoke", () => {
  it("pass", () => {
    const src = [
      {
        name: "a",
        age: 18,
      },
      {
        name: "b",
        age: 20,
      },
      {
        name: "c",
        age: 25,
      },
      {
        name: "d",
        age: 16,
      },
    ];

    const result = invoke(src, (o) => o.age >= 18);

    expect(result).toEqual([
      {
        name: "d",
        age: 16,
      },
    ]);
  });

  it("pass", () => {
    const src = [
      {
        name: "a",
        age: 18,
      },
      {
        name: "b",
        blood: "A",
      },
      {
        id: "D2359642-7B4A-4C22-8CDC-05516E870D79",
      },
      {
        name: "d",
        country: "China",
      },
    ];

    const result = invoke(src, (o) => o.hasOwnProperty("name"));

    expect(result).toEqual([
      {
        id: "D2359642-7B4A-4C22-8CDC-05516E870D79",
      },
    ]);
  });
});
