import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { renderWithProviders } from "../utils/testUtils";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the 'Lista'", () => {
      const expectedListText = "Lista";

      renderWithProviders(<Navigation />);

      const lista = screen.getByRole("link", { name: expectedListText });

      expect(lista).toBeInTheDocument();
    });
    test("Then it should show a link with the text 'Login'", () => {
      const expectedLoginText = "Login";

      renderWithProviders(<Navigation />);

      const login = screen.getByRole("link", { name: expectedLoginText });

      expect(login).toBeInTheDocument();
    });
    test("Then it should show an image with the alternative text 'Create element'", () => {
      const expectedAltText = "Create element";

      renderWithProviders(<Navigation />);

      const plus = screen.getByAltText(expectedAltText);

      expect(plus).toBeInTheDocument();
    });
  });
});
