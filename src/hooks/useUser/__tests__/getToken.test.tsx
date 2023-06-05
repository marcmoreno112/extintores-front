import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentialsMock } from "../../../mocks/userMocks";
import useUser from "../useUser";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import { UserStructure } from "../../../types";
import { providerWrapper } from "../../../utils/testUtils";

describe("Given a getToken function", () => {
  describe("When it receives valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const userCredentials = userCredentialsMock;

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: providerWrapper });

      const token = await getToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When it receives invalid user credentials", () => {
    test("Then it should throw a 'Wrong credentials' error", () => {
      server.resetHandlers(...errorHandlers);

      const userCredentialsMock: UserStructure = {
        username: "user",
        password: "pass",
      };

      const expectedError = "Wrong credentials";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: providerWrapper });

      const getTokenFunction = getToken(userCredentialsMock);

      expect(getTokenFunction).rejects.toThrowError(expectedError);
    });
  });
});
