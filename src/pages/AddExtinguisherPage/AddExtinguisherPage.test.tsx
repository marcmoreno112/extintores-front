import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils";
import AddExtinguisherPage from "./AddExtinguisherPage";

describe("Given an AddExtinguisherPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Add extinguisher' title", () => {
      const expectedTitle = "Add extinguisher";

      renderRouterWithProviders(<AddExtinguisherPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
