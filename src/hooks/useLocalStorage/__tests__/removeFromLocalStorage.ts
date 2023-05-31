import useLocalStorage from "../useLocalStorage";

describe("Given a removeFromLocalStorage", () => {
  describe("When it is called with the key 'token'", () => {
    test("Then LocalStorage token property should be empty", () => {
      const key = "token";

      const { removeFromLocalStorage } = useLocalStorage();
      removeFromLocalStorage(key);

      expect(localStorage.getItem(key)).toBeNull();
    });
  });
});
