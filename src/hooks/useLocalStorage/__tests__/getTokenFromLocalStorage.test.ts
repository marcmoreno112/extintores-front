import { tokenMock } from "../../../mocks/userMocks";
import useLocalStorage from "../useLocalStorage";

beforeEach(() => {
  localStorage.removeItem("token");
});

describe("Given a getTokenFromLocalStorage function", () => {
  describe("When it is called and there is a token in LocalStorage", () => {
    test("Then it should return a token", () => {
      const expectedToken = tokenMock;

      localStorage.setItem("token", expectedToken);
      const { getTokenFromLocalStorage } = useLocalStorage();
      const token = getTokenFromLocalStorage();

      expect(token).toBe(expectedToken);
    });
  });
  describe("When it is called and there is not a token", () => {
    test("Then it should return null", () => {
      const { getTokenFromLocalStorage } = useLocalStorage();
      const token = getTokenFromLocalStorage();

      expect(token).toBeNull();
    });
  });
});
