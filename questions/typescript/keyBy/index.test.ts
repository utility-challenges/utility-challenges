import { keyBy } from "./index";

const ary = [
  {
    name: "John",
    age: 30,
    id: "8FDB15D1-6DCD-4F19-8E4D-A5197DA6093C",
  },
  {
    name: "Mike",
    age: 40,
    id: "61F805A2-383D-4353-8E28-4BA818770916",
  },
  {
    name: "Mary",
    age: 30,
    id: "38F65C5F-9027-438A-A3C4-8E906ACFEB00",
  },
];

describe("keyBy", () => {
  it("pass", () => {
    const result = keyBy(ary, "name");

    expect(result).toEqual({
      John: {
        name: "John",
        age: 30,
        id: "8FDB15D1-6DCD-4F19-8E4D-A5197DA6093C",
      },
      Mike: {
        name: "Mike",
        age: 40,
        id: "61F805A2-383D-4353-8E28-4BA818770916",
      },
      Mary: {
        name: "Mary",
        age: 30,
        id: "38F65C5F-9027-438A-A3C4-8E906ACFEB00",
      },
    });
  });

  it("pass", () => {
    const result = keyBy(ary, "age");

    expect(result).toEqual({
      30: {
        name: "John",
        age: 30,
        id: "8FDB15D1-6DCD-4F19-8E4D-A5197DA6093C",
      },
      40: {
        name: "Mike",
        age: 40,
        id: "61F805A2-383D-4353-8E28-4BA818770916",
      },
    });
  });

  it("pass", () => {
    const result = keyBy(ary, (item) => `${item.name}-${item.age}`);

    expect(result).toEqual({
      "John-30": {
        name: "John",
        age: 30,
        id: "8FDB15D1-6DCD-4F19-8E4D-A5197DA6093C",
      },
      "Mike-40": {
        name: "Mike",
        age: 40,
        id: "61F805A2-383D-4353-8E28-4BA818770916",
      },
      "Mary-30": {
        name: "Mary",
        age: 30,
        id: "38F65C5F-9027-438A-A3C4-8E906ACFEB00",
      },
    });
  });

  it("pass", () => {
    const result = keyBy(
      ary,
      // @ts-ignore
      "foo"
    );

    expect(result).toEqual({});
  });
});
