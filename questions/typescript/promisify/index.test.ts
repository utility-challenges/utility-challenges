import { promisify } from "./index";

const fn = (value: number, cb: (error: Error, results?: number) => any) => {
  if (value < 0) return cb(new Error("there is an error"));

  return cb(null, value);
};

describe("promisify", () => {
  it("pass", async () => {
    const result = promisify(fn);

    await expect(result(100)).resolves.toBe(100);
  });

  it("pass", async () => {
    const result = promisify(fn);

    await expect(result(-1)).rejects.toThrowError(
      new Error("there is an error")
    );
  });
});
