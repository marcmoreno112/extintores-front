import { providerWrapper, renderWithProviders } from "../../utils/testUtils";
import App from "./App";
import { renderHook, screen } from "@testing-library/react";
import { initialUserState } from "../../store/user/userSlice";
import { UserStateStructure } from "../../store/user/types";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { tokenMock } from "../../mocks/userMocks";
import modals from "../Modal/modals";
import { UiState } from "../../store/ui/types";
import userEvent from "@testing-library/user-event";
import useExtinguishers from "../../hooks/useExtinguisers/useExtinguishers";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { routes } from "../../router/appRouter";

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

      const button = await screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is called and there is an error getting extintores", () => {
    test(`Then it should show a '${modals.getItemsError.text}' modal`, async () => {
      server.resetHandlers(...errorHandlers);

      const preloadedState: UiState = {
        isLoading: false,
        hasModal: false,
        modal: modals.getItemsError,
      };

      const expectedText = modals.getItemsError.text;

      const testRoutes: RouteObject[] = routes;

      const mockRouter = createMemoryRouter(testRoutes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        uiState: preloadedState,
      });

      const modal = await screen.findByAltText(expectedText);

      expect(modal).toBeInTheDocument();
    });
  });
});
describe("And the user clicks the close button", () => {
  test("Then the modal should disappear", async () => {
    const preloadedState: UiState = {
      isLoading: false,
      hasModal: true,
      modal: modals.getItemsError,
    };

    const expectedText = modals.getItemsError.text;

    const routes: RouteObject[] = [
      {
        path: "/",
        element: <App />,
      },
    ];

    const mockRouter = createMemoryRouter(routes);

    renderWithProviders(<RouterProvider router={mockRouter} />, {
      uiState: preloadedState,
    });

    const {
      result: {
        current: { getExtinguishers },
      },
    } = renderHook(() => useExtinguishers(), { wrapper: providerWrapper });

    await getExtinguishers();

    const modal = screen.getByAltText(expectedText);
    const expectedButtonAlt = "close button";
    const button = screen.getByAltText(expectedButtonAlt);

    await userEvent.click(button);

    expect(modal).not.toBeInTheDocument();
  });
});
