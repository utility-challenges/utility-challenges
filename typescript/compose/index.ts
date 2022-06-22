export const compose = (...fn: ((...args: any) => any)[]): any => {
  if (fn.length === 1) return fn[0];

  return fn.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
