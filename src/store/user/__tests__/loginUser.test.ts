import { UserDataStructure, UserStateStructure } from "../types";
import { loginUserActionCreator, userReducer } from "../userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives an empty initialUserState and a user as payload", () => {
    test("Then it should return a new state with the logged user", () => {
      const initialState: UserStateStructure = {
        name: "",
        id: "",
        token: "",
        isLogged: false,
      };
      const user: UserDataStructure = {
        name: "Luigi",
        id: "jke133",
        token: "jlfe233323",
      };
      const userAction = loginUserActionCreator(user);
      const newState: UserStateStructure = {
        name: user.name,
        id: user.id,
        token: user.token,
        isLogged: true,
      };

      const newUserState = userReducer(initialState, userAction);

      expect(newUserState).toStrictEqual(newState);
    });
  });
});
