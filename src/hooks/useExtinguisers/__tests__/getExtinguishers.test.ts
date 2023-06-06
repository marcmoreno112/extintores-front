import { renderHook } from "@testing-library/react";
import useExtinguishers from "../useExtinguishers";
import { extinguishersMock } from "../../../mocks/extinguishersMocks";
import { providerWrapper } from "../../../utils/testUtils";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";

describe("Given a getExtinguishers function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of extinguishers", async () => {
      const {
        result: {
          current: { getExtinguishers },
        },
      } = renderHook(() => useExtinguishers(), { wrapper: providerWrapper });

      const extinguishers = await getExtinguishers();

      const expectedExtinguishers = extinguishersMock;

      expect(extinguishers).toStrictEqual(expectedExtinguishers);
    });
  });
  describe("When it is called and there is an error in database", () => {
    test("Then it should throw a 'Database problem'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Database problem");

      const {
        result: {
          current: { getExtinguishers },
        },
      } = renderHook(() => useExtinguishers(), { wrapper: providerWrapper });

      const extinguishers = getExtinguishers();

      expect(extinguishers).rejects.toThrowError(expectedError);
    });
  });
});
