import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  renderWithProvidersRouter,
} from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths";
import { Suspense } from "react";
import { LazyListPage } from "../../router/LazyPages";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import App from "../../components/App/App";

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

  const validUsername = "admin";
  const validPassword = "admin";

  describe("When the user types a valid credentials and clicks the form button", () => {
    test(`Then it should navigate to "/"`, async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <Navigate to={`${paths.extintores}`} replace />,
            },
            {
              path: `${paths.extintores}`,
              element: (
                <Suspense>
                  <LazyListPage />
                </Suspense>
              ),
            },
            {
              path: paths.login,
              element: <LoginPage />,
            },
          ],
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      await mockRouter.navigate(paths.login);

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      await userEvent.type(passwordInput, validUsername);
      await userEvent.type(usernameInput, validPassword);
      await userEvent.click(button);

      const expectedPath = paths.extintores;

      expect(mockRouter.state.location.pathname).toBe(expectedPath);
    });
  });

  describe("When the user types invalid credentials and clicks the form button", () => {
    test("Then it should navigato to '/'", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <Navigate to={`${paths.extintores}`} replace />,
            },
            {
              path: `${paths.extintores}`,
              element: (
                <Suspense>
                  <LazyListPage />
                </Suspense>
              ),
            },
            {
              path: paths.login,
              element: <LoginPage />,
            },
          ],
        },
      ];

      server.resetHandlers(...errorHandlers);

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      await mockRouter.navigate(paths.login);

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });
      await userEvent.type(passwordInput, validUsername);
      await userEvent.type(usernameInput, validPassword);
      await userEvent.click(button);

      const expectedPath = paths.login;

      expect(mockRouter.state.location.pathname).toBe(expectedPath);
    });
  });
});
