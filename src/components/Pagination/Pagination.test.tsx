import { screen } from "@testing-library/react";
import Pagination from "./Pagination";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Cargar más...'", () => {
      const expectedButtonText = "Cargar más...";

      renderWithProviders(<Pagination />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
