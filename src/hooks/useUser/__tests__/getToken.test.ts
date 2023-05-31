import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentialsMock } from "../../../mocks/userMocks";
import useUser from "../useUser";
import { UserStructure } from "../../../types";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";

describe("Given a getToken function", () => {
  describe("When it receives valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const userCredentials = userCredentialsMock;

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser());

      const token = await getToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });
  describe("When it receives invalid user credentials", () => {
    test("Then it should return a 'Wrong credentials' message", () => {
      server.use(...errorHandlers);

      const userCredentials: UserStructure = {
        username: "",
        password: "aaa",
      };

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser());

      const getTokenFunction = async () => {
        await getToken(userCredentials);
      };

      expect(getTokenFunction).rejects.toThrowError();
    });
  });
});
