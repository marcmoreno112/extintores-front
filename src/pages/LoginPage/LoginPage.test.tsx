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
import paths from "../../router/paths";
import { Suspense } from "react";
import { LazyListPage } from "../../router/LazyPages";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import ListPage from "../ListPage/ListPage";

describe(`Given a '${paths.login}' path`, () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Login' title", () => {
      const expectedTitle = "Login";

      renderWithProvidersRouter(<LoginPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  const expectedButtonText = "Enviar";
  const expectedUsernameLabel = "Nombre de usuario";
  const expectedPasswordLabel = "Contraseña";

  describe("When the user types a valid username or password and clicks the form button", () => {
    test(`Then it should navigate to "/"`, async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
          children: [
            {
              path: `${paths.extintores}`,
              element: (
                <Suspense>
                  <LazyListPage />
                </Suspense>
              ),
            },
          ],
        },
      ];

      const mockRouter = createMemoryRouter(routes);

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
  describe("When the user types an invalid username or password and clicks the form button", () => {
    test("Then it should navigato to '/'", async () => {
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

      const invalidUsername = "admin";
      const invalidPassword = "admin";

      server.resetHandlers(...errorHandlers);

      renderWithProviders(<RouterProvider router={mockRouter} />);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      await userEvent.type(passwordInput, invalidUsername);
      await userEvent.type(usernameInput, invalidPassword);
      await userEvent.click(button);

      const expectedPath = "/";

      expect(mockRouter.state.location.pathname).toBe(expectedPath);
    });
  });
});
