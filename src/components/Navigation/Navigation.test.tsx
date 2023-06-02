import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import {
  renderWithProviders,
  renderRouterWithProviders,
} from "../../utils/testUtils";
import { userStateLoggedMock } from "../../mocks/userMocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../Header/Header";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'Lista', another one with the text 'Login' and another link with the label 'Create element'", () => {
      const expectedListText = "Lista";
      const expectedLoginText = "Login";
      const expectedSumText = "Create element";

      renderRouterWithProviders(<Navigation />);

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
      const expectedButtonText = "Logout";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Navigation />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        userState: userStateLoggedMock,
      });

      const button = await screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'logout' button", () => {
    test("Then the token key in localStorage shouldn't exist", async () => {
      const expectedButtonText = "Logout";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Navigation />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        userState: userStateLoggedMock,
      });

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(button);

      const resultToken = localStorage.getItem("token");

      expect(resultToken).toBeNull();
    });

    test("Then Navigation component should show the 'Login' link and not show the 'Logout' link", async () => {
      const expectedButtonText = "Logout";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Header />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        userState: userStateLoggedMock,
      });

      const button = await screen.getByRole("button", {
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
