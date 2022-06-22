export const pipe = (...fn: ((...args: any) => any)[]): any => {
  if (fn.length === 1) return fn[0];

  return fn.reduce(
    (a, b) =>
      (...args) =>
        b(a(...args))
  );
};
