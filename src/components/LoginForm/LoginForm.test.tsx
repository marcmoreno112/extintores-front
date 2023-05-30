import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Enviar'", () => {
      const expectedText = "Enviar";

      renderWithProviders(<LoginForm />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
    test("Then it should show a 'Nombre de usuario' input", () => {
      const expectedText = "Nombre de usuario";

      renderWithProviders(<LoginForm />);

      const input = screen.getByLabelText(expectedText);

      expect(input).toBeInTheDocument();
    });
    test("Then it should show a 'Contraseña' input", () => {
      const expectedText = "Contraseña";

      renderWithProviders(<LoginForm />);

      const input = screen.getByLabelText(expectedText);

      expect(input).toBeInTheDocument();
    });
  });
});
