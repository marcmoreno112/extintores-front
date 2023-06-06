import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  renderRouterWithProviders,
} from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import ListPage from "../ListPage/ListPage";
import Header from "../../components/Header/Header";
import { initialUserState } from "../../store/user/userSlice";
import { Suspense } from "react";
import { LazyLoginPage } from "../../router/lazyPages";

describe(`Given a '${paths.login}' path`, () => {
  const expectedButtonText = "Enviar";
  const expectedUsernameLabel = "Nombre de usuario";
  const expectedPasswordLabel = "Contraseña";

  const validUsername = "admin";
  const validPassword = "admin";

  describe("When it is rendered", () => {
    test("Then it should show a 'Login' title", () => {
      const expectedTitle = "Login";

      renderRouterWithProviders(<LoginPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user types a valid credentials and clicks the form button", () => {
    test("Then it should show the title 'Extintores'", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: (
            <>
              <Header />
              <ListPage />
            </>
          ),
        },
        {
          path: paths.login,
          element: <LoginPage />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      const loginButton = screen.getByRole("link", { name: "Login" });

      await userEvent.click(loginButton);

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      await userEvent.type(passwordInput, validUsername);
      await userEvent.type(usernameInput, validPassword);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(button);

      const expectedTitle = "Extintores";
      const title = screen.getByRole("heading", {
        name: expectedTitle,
        level: 2,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user types invalid credentials and clicks the form button", () => {
    test("Then it should show the title 'Login'", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Header />,
        },
        {
          path: paths.login,
          element: (
            <Suspense>
              <LazyLoginPage />
            </Suspense>
          ),
        },
      ];

      server.resetHandlers(...errorHandlers);

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        userState: initialUserState,
      });

      const loginButton = screen.getByRole("link", { name: "Login" });

      await userEvent.click(loginButton);

      const usernameInput = screen.getByLabelText(expectedUsernameLabel);
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });
      await userEvent.type(passwordInput, validUsername);
      await userEvent.type(usernameInput, validPassword);
      await userEvent.click(button);

      const expecteTitle = "Login";
      const title = screen.getByRole("heading", {
        name: expecteTitle,
        level: 2,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
