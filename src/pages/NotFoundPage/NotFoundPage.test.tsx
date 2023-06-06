import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'No se encuentra la página' title", () => {
      const expectedTitle = "No se encuentra la página";

      renderWithProviders(<NotFoundPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
