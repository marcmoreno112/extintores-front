import { renderHook } from "@testing-library/react";
import useExtinguishers from "../useExtinguishers";
import { providerWrapper } from "../../../utils/testUtils";
import { extinguishersMock } from "../../../mocks/extinguishersMocks";

describe("Given a updateApiExtinguisher function", () => {
  describe("When it is called with an extinguisher", () => {
    test("Then it should return the extinguisher", async () => {
      const {
        result: {
          current: { updateApiExtinguisher },
        },
      } = renderHook(() => useExtinguishers(), { wrapper: providerWrapper });

      const mockExtinguisher = extinguishersMock[0];

      const updatedExtinguisher = await updateApiExtinguisher(mockExtinguisher);

      expect(updatedExtinguisher).toStrictEqual(mockExtinguisher);
    });
  });
});
