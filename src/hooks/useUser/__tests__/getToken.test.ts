import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentialsMock } from "../../../mocks/userMocks";
import useUser from "../useUser";

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
});
