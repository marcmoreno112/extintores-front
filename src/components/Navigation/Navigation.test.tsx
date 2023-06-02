import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import {
  renderWithProviders,
  renderWithProvidersRouter,
} from "../../utils/testUtils";
import { vi } from "vitest";
import { tokenMock } from "../../mocks/userMocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import App from "../App/App";
import userEvent from "@testing-library/user-event";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'Lista', another one with the text 'Login' and another link with the label 'Create element'", () => {
      const expectedListText = "Lista";
      const expectedLoginText = "Login";
      const expectedSumText = "Create element";
      const onClickFunction = vi.fn();

      renderWithProvidersRouter(
        <Navigation onClickFunction={onClickFunction} />
      );

      const lista = screen.getByRole("link", { name: expectedListText });
      const login = screen.getByRole("link", { name: expectedLoginText });
      const sum = screen.getByRole("link", { name: expectedSumText });

      expect(lista).toBeInTheDocument();
      expect(login).toBeInTheDocument();
      expect(sum).toBeInTheDocument();
    });
  });

  describe("When there is a token in localStorage", () => {
    test("Then it should show a 'Logout' button", async () => {
      const token = tokenMock;
      const expectedButtonText = "Logout";

      localStorage.setItem("token", token);

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      const button = await screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'logout' button", () => {
    test("Then the token key in localStorage shouldn't exist", async () => {
      const token = tokenMock;
      const expectedButtonText = "Logout";

      localStorage.setItem("token", token);

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(button);

      const resultToken = localStorage.getItem("token");

      expect(resultToken).toBeNull();
    });

    test("Then Navigation component should show the 'Login' link and not show the 'Logout' link", async () => {
      const token = tokenMock;
      const expectedButtonText = "Logout";

      localStorage.setItem("token", token);

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(button);

      const resultButtonText = "Login";

      const newButton = await screen.getByRole("link", {
        name: resultButtonText,
      });

      expect(button).not.toBeInTheDocument();
      expect(newButton).toBeInTheDocument();
    });
  });
});
