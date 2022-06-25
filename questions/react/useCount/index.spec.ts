import { renderHook, act } from "@testing-library/react";

import { useCount } from "./index";

describe("useCount", () => {
  it("pass", () => {
    const { result } = renderHook(() => useCount());

    expect(result.current.count).toEqual(0);
  });

  it("pass", () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.countUp();
    });

    expect(result.current.count).toEqual(1);
  });

  it("pass", () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.countDown();
    });

    expect(result.current.count).toEqual(-1);
  });
});
