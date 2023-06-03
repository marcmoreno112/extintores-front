import { renderWithProviders } from "../../utils/testUtils";
import App from "./App";
import { screen } from "@testing-library/react";
import { initialUserState } from "../../store/user/userSlice";
import { UserStateStructure } from "../../store/user/types";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { tokenMock } from "../../mocks/userMocks";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Extintores'", async () => {
      const expectedTitle = "Extintores";
      const preloadedState: UserStateStructure = initialUserState;

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        userState: preloadedState,
      });

      const title = await screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is rendered and there is a token in localStorage", () => {
    test("Then it should show a 'Logout'", async () => {
      const expectedButtonText = "Logout";

      const token = tokenMock;

      localStorage.setItem("token", token);

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      screen.debug();

      const button = await screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
