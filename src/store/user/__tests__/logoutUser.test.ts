import { UserStateStructure } from "../types";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser reducer", () => {
  describe("When it is called", () => {
    test("Then it should return an empty userState", () => {
      const initialMockState: UserStateStructure = {
        name: "Mock",
        id: "1234",
        token: "1234mock",
        isLogged: true,
      };

      const expectedState: UserStateStructure = {
        name: "",
        id: "",
        token: "",
        isLogged: false,
      };

      const logoutAction = logoutUserActionCreator();
      const newUserState = userReducer(initialMockState, logoutAction);

      expect(newUserState).toStrictEqual(expectedState);
    });
  });
});
