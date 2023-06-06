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
import modalErrors from "../Modal/modalErrors";
import { UiState } from "../../store/ui/types";
import userEvent from "@testing-library/user-event";
import useExtinguishers from "../../hooks/useExtinguisers/useExtinguishers";

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
    test(`Then it should show a '${modalErrors.getItemsError.text}' modal`, () => {
      const preloadedState: UiState = {
        isLoading: false,
        hasModal: true,
        modal: modalErrors.getItemsError,
      };

      const expectedText = modalErrors.getItemsError.text;

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

      const modal = screen.getByAltText(expectedText);

      expect(modal).toBeInTheDocument();
    });
    describe("And the user clicks the close button", () => {
      test("Then the modal should disappear", async () => {
        const preloadedState: UiState = {
          isLoading: false,
          hasModal: true,
          modal: modalErrors.getItemsError,
        };

        const expectedText = modalErrors.getItemsError.text;

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
  });
});
