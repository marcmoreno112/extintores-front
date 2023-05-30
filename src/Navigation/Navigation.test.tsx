import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { renderWithProviders } from "../utils/testUtils";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Lista' link, a 'Login' link and an image with the alternative text 'Create element'", () => {
      const expectedListText = "Lista";
      const expectedLoginText = "Login";

      renderWithProviders(<Navigation />);

      const lista = screen.getByRole("link", { name: expectedListText });
      const plus = screen.getByAltText("Create element");
      const login = screen.getByRole("link", { name: expectedLoginText });

      expect(lista).toBeInTheDocument();
      expect(plus).toBeInTheDocument();
      expect(login).toBeInTheDocument();
    });
  });
});
