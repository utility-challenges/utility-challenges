import { renderHook, act } from "@testing-library/react";

import { useCounter } from "./index";

describe("useCounter", () => {
  it("pass", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toEqual(0);
  });

  it("pass", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.countUp();
    });

    expect(result.current.count).toEqual(1);
  });

  it("pass", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.countDown();
    });

    expect(result.current.count).toEqual(-1);
  });
});
