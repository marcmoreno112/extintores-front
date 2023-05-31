import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../../mocks/userMocks";
import useLocalStorage from "../useLocalStorage";

beforeEach(() => {
  localStorage.clear;
});

describe("Given an addToLocalStorage function", () => {
  describe("When it is called with a key 'token' and a token", () => {
    test("Then it should call the function setItem of LocalStorage with the key and the token", () => {
      const key = "token";
      const token = tokenMock;

      const { result } = renderHook(() => useLocalStorage());
      const { addToLocalStorage } = result.current;

      addToLocalStorage(key, token);

      expect(localStorage.getItem(key)).toBe(token);
    });
  });
});
