import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { renderWithProvidersRouter } from "../../utils/testUtils";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'Lista', another one with the text 'Login' and another link with the label 'Create element'", () => {
      const expectedListText = "Lista";
      const expectedLoginText = "Login";
      const expectedSumText = "Create element";

      renderWithProvidersRouter(<Navigation />);

      const lista = screen.getByRole("link", { name: expectedListText });
      const login = screen.getByRole("link", { name: expectedLoginText });
      const sum = screen.getByRole("link", { name: expectedSumText });

      expect(lista).toBeInTheDocument();
      expect(login).toBeInTheDocument();
      expect(sum).toBeInTheDocument();
    });
  });
});
