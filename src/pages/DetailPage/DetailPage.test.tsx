import { screen } from "@testing-library/react";
import { extinguishersMock } from "../../mocks/extinguishersMocks";
import { renderRouterWithProviders } from "../../utils/testUtils";
import DetailPage from "./DetailPage";

describe("Given a DetailPage page", () => {
  describe("When it is rendered with a valid id as params", () => {
    test("Then it should show the title of the detail", () => {
      const expectedTitle = extinguishersMock[0].brand;

      renderRouterWithProviders(<DetailPage />, {
        extinguishersState: {
          classFilter: "A",
          extinguishers: extinguishersMock,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 10,
          selectedExtinguisher: extinguishersMock[0],
        },
      });

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
