import { renderHook } from "@testing-library/react";
import useExtinguishers from "../useExtinguishers";
import { providerWrapper } from "../../../utils/testUtils";
import { extinguishersMock } from "../../../mocks/extinguishersMocks";

describe("Given a getSelectedExtinguisher function", () => {
  describe("When it is called with an id", () => {
    test("Then it should return an extinguisher with the id", async () => {
      const {
        result: {
          current: { getSelectedExtinguisher },
        },
      } = renderHook(() => useExtinguishers(), { wrapper: providerWrapper });

      const id = extinguishersMock[0].id;

      const extinguisher = await getSelectedExtinguisher(id);

      const expectedExtinguisher = extinguishersMock[0];

      expect(extinguisher).toStrictEqual({
        extinguisher: expectedExtinguisher,
      });
    });
  });
});
