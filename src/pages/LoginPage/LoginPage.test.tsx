import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  renderWithProvidersRouter,
} from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import ListPage from "../ListPage/ListPage";
import paths from "../../router/paths";

describe(`Given a '${paths.login}' path`, () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Login' title", () => {
      const expectedTitle = "Login";

      renderWithProvidersRouter(<LoginPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When the user types a valid username and password and clicks the button", () => {
    test(`Then it should navigate to "/"`, async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
          children: [
            {
              path: `${paths.extintores}`,
              element: <ListPage />,
            },
          ],
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      const expectedButtonText = "Enviar";
      const expectedUsernameLabel = "Nombre de usuario";
      const expectedPasswordLabel = "Contraseña";
      const validUsername = "admin";
      const validPassword = "admin";

      renderWithProviders(<RouterProvider router={mockRouter} />);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      await userEvent.type(passwordInput, validUsername);
      await userEvent.type(usernameInput, validPassword);
      await userEvent.click(button);

      const expectedPath = "/";

      expect(mockRouter.state.location.pathname).toBe(expectedPath);
    });
  });
});
