import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { UserTokenStructure } from "../../store/user/types";

describe("Given a decodeToken function", () => {
  describe("When it receives a token that ends with 'LDiWg'", () => {
    test("Then it should retunr a name 'juan' and the id '6468df54ae7ebc2d8285fe23'", () => {
      const expectedId = "6468df54ae7ebc2d8285fe23";
      const expecteName = "juan";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDY4ZGY1NGFlN2ViYzJkODI4NWZlMjMiLCJuYW1lIjoianVhbiIsImlhdCI6MTY4NDc4NjI2MSwiZXhwIjoxNjg0OTU5MDYxfQ.k3cmKDDPpJA-ucUBdRERbVfZXfzuigkaSpkBdFLDiWg";

      const expectedResult: UserTokenStructure = {
        name: expecteName,
        id: expectedId,
        token: token,
      };

      const {
        result: {
          current: { decodeToken },
        },
      } = renderHook(() => useToken());

      const userData = decodeToken(token);

      expect(userData).toStrictEqual(expectedResult);
    });
  });
});
