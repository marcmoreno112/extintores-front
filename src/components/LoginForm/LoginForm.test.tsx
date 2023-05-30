import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

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
  describe("When it is rendered and the input are empty", () => {
    test("Then it show a disabled button", () => {
      const buttonText = "Enviar";

      renderWithProviders(<LoginForm />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types 'Juan' at the username input", () => {
    test("Then it should show the text 'Juan' at the username input and a disabled button", async () => {
      const expectedUsernameText = "Juan";
      const expectedUsernameLabel = "Nombre de usuario";
      const expectedButtonText = "Enviar";

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const button = screen.getByRole("button", { name: expectedButtonText });
      await userEvent.type(usernameInput, expectedUsernameText);

      expect(usernameInput).toHaveValue(expectedUsernameText);
      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types '1234' at the password input", () => {
    test("Then it should show the text '1234' at the password input and a disabled button", async () => {
      const expectedPasswordText = "1234";
      const expectedPasswordLabel = "Contraseña";
      const expectedButtonText = "Enviar";

      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      const button = screen.getByRole("button", { name: expectedButtonText });
      await userEvent.type(passwordInput, expectedPasswordText);

      expect(passwordInput).toHaveValue(expectedPasswordText);
      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types 'Juan' at the username input and '1234' at the password input", () => {
    test("Then it should show the text 'Juan' at the username input, the text '1234' at the password input and an enabled button", async () => {
      const expectedUsernameText = "Juan";
      const expectedUsernameLabel = "Nombre de usuario";
      const expectedPasswordText = "1234";
      const expectedPasswordLabel = "Contraseña";
      const expectedButtonText = "Enviar";

      renderWithProviders(<LoginForm />);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      await userEvent.type(passwordInput, expectedPasswordText);
      await userEvent.type(usernameInput, expectedUsernameText);

      expect(button).toBeEnabled();
    });
  });
});
