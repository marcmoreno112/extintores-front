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
        state: preloadedState,
      });

      const title = await screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
