import { vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../../mocks/userMocks";
import useLocalStorage from "../useLocalStorage";

describe("Given an addToLocalStorage function", () => {
  describe("When it is called with a key 'token' and a token", () => {
    test("Then it should call the function setItem of LocalStorage with the key and the token", () => {
      const key = "token";
      const token = tokenMock;

      const { result } = renderHook(() => useLocalStorage());
      const addToLocalStorage = result.current.addToLocalStorage;

      Object.defineProperty(window, "localStorage", {
        value: {
          setItem: vi.fn(),
        },
        writable: true,
      });

      addToLocalStorage(key, token);

      expect(window.localStorage.setItem).toHaveBeenCalledWith(key, token);
    });
  });
});
