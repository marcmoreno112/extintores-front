import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";

describe("Given a removeFromLocalStorage", () => {
  describe("When it is called with the key 'token'", () => {
    test("Then LocalStorage token property should be empty", () => {
      const key = "token";

      const { result } = renderHook(() => useLocalStorage());
      const { removeFromLocalStorage } = result.current;
      removeFromLocalStorage(key);

      expect(localStorage.getItem(key)).toBeNull();
    });
  });
});
