import Header from "./Header";
import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  renderWithProvidersRouter,
} from "../../utils/testUtils";
import { tokenMock } from "../../mocks/userMocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import App from "../App/App";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Extintores'", () => {
      const expectedTitle = "Extintores";

      renderWithProvidersRouter(<Header />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
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
});
