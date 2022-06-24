import { to_object } from "./index";

describe("to_object", () => {
  it("pass", () => {
    const ary = [
      {
        id: "DB44880B-23DB-4A5F-BF4C-FE5CC777542B",
        name: "John",
      },
      {
        id: "B0081DC7-B445-4EE6-A071-54A1B777F2B7",
        name: "Mike",
      },
    ];

    const result = to_object(ary, "id");

    expect(result).toStrictEqual({
      "DB44880B-23DB-4A5F-BF4C-FE5CC777542B": {
        id: "DB44880B-23DB-4A5F-BF4C-FE5CC777542B",
        name: "John",
      },
      "B0081DC7-B445-4EE6-A071-54A1B777F2B7": {
        id: "B0081DC7-B445-4EE6-A071-54A1B777F2B7",
        name: "Mike",
      },
    });
  });

  it("pass", () => {
    const ary = [
      {
        id: "DB44880B-23DB-4A5F-BF4C-FE5CC777542B",
        name: "John",
      },
      {
        this_is_not_id: "B0081DC7-B445-4EE6-A071-54A1B777F2B7",
        name: "Mike",
      },
    ];

    const result = to_object(ary, "id");

    expect(result).toStrictEqual({
      "DB44880B-23DB-4A5F-BF4C-FE5CC777542B": {
        id: "DB44880B-23DB-4A5F-BF4C-FE5CC777542B",
        name: "John",
      },
    });
  });
});
