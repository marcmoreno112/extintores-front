import { vi } from "vitest";
import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  const expectedButtonText = "Enviar";
  const submitFunction = vi.fn();
  const expectedUsernameLabel = "Nombre de usuario";
  const expectedUsernameText = "Juan";
  const expectedPasswordText = "1234";
  const expectedPasswordLabel = "Contraseña";

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Enviar'", () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
    test("Then it should show a 'Nombre de usuario' input", () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);

      expect(usernameInput).toBeInTheDocument();
    });
    test("Then it should show a 'Contraseña' input", () => {
      const expectedPasswordLabel = "Contraseña";

      renderWithProviders(<LoginForm submitFunction={submitFunction} />);

      const passwordInput = screen.getByLabelText(expectedPasswordLabel);

      expect(passwordInput).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the input are empty", () => {
    test("Then it show a disabled button", () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types 'Juan' at the username input", () => {
    test("Then it should show the text 'Juan' at the username input and a disabled button", async () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const button = screen.getByRole("button", { name: expectedButtonText });
      await userEvent.type(usernameInput, expectedUsernameText);

      expect(usernameInput).toHaveValue(expectedUsernameText);
      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types '1234' at the password input", () => {
    test("Then it should show the text '1234' at the password input and a disabled button", async () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);

      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      const button = screen.getByRole("button", { name: expectedButtonText });
      await userEvent.type(passwordInput, expectedPasswordText);

      expect(passwordInput).toHaveValue(expectedPasswordText);
      expect(button).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types 'Juan' at the username input and '1234' at the password input", () => {
    test("Then it should show the text 'Juan' at the username input, the text '1234' at the password input and an enabled button", async () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);
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
  describe("When it is rendered and the user types credentials and clicks the send button", () => {
    test("Then it should call the received function", async () => {
      renderWithProviders(<LoginForm submitFunction={submitFunction} />);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      await userEvent.type(passwordInput, expectedPasswordText);
      await userEvent.type(usernameInput, expectedUsernameText);
      await userEvent.click(button);

      expect(submitFunction).toHaveBeenCalled();
    });
  });
});
