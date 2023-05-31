import { tokenMock } from "../../../mocks/userMocks";
import useLocalStorage from "../useLocalStorage";
import { renderHook } from "@testing-library/react";

beforeEach(() => {
  localStorage.removeItem("token");
});

describe("Given a getFromLocalStorage function", () => {
  const key = "token";
  describe("When it is called with the key 'token' and there is a token in LocalStorage", () => {
    test("Then it should return a token", () => {
      const expectedToken = tokenMock;

      const { result } = renderHook(() => useLocalStorage());
      const { getFromLocalStorage } = result.current;

      localStorage.setItem(key, expectedToken);
      const token = getFromLocalStorage(key);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When it is called and there is not a token", () => {
    test("Then it should return null", async () => {
      const { result } = renderHook(() => useLocalStorage());
      const { getFromLocalStorage } = result.current;

      const token = getFromLocalStorage(key);

      expect(token).toBeNull();
    });
  });
});
