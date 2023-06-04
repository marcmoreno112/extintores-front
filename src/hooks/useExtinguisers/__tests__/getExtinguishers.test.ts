import { renderHook } from "@testing-library/react";
import useExtinguishers from "../useExtinguishers";
import { extinguishersMock } from "../../../mocks/extinguishersMocks";

describe("Given a getExtinguishers function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of extinguishers", async () => {
      const {
        result: {
          current: { getExtinguishers },
        },
      } = renderHook(() => useExtinguishers());

      const extinguishers = await getExtinguishers();

      const expectedExtinguishers = extinguishersMock;

      expect(extinguishers).toStrictEqual(expectedExtinguishers);
    });
  });
});
