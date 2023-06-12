import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import { extinguishersMock } from "../../../mocks/extinguishersMocks";
import userEvent from "@testing-library/user-event";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import App from "../App";
import modals from "../../Modal/modals";
import { ExtinguishersStateStructure } from "../../../store/extinguishers/types";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import ListPage from "../../../pages/ListPage/ListPage";
import paths from "../../../router/paths";
import { ExtinguisherStructure } from "../../../types";

describe("Given an App component", () => {
  describe("When it is rendered and the user deletes an extinguisher of his own", () => {
    test(`Then it should show a '${modals.deleteItemSuccess.text}' modal`, async () => {
      server.resetHandlers(...handlers);

      const initialExtinguisherState: ExtinguishersStateStructure = {
        extinguishers: extinguishersMock,
        loadNumber: 1,
        numberOfExtinguishersAtDb: 3,
        classFilter: "",
        selectedExtinguisher: {} as ExtinguisherStructure,
      };

      const newRoutes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <Navigate to={`${paths.extinguishers}`} replace />,
            },
            {
              path: `${paths.extinguishers}`,
              element: <ListPage />,
            },
          ],
        },
      ];

      const testRouter = createMemoryRouter(newRoutes);

      renderWithProviders(<RouterProvider router={testRouter} />, {
        userState: {
          isLogged: true,
          id: extinguishersMock[0].user,
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODYwODIxNDYsImV4cCI6MTcxMjAwMjE0Nn0.7o2BZ7LtDBQK6dlZqv4fNvPqg3Mv-efllBXFrpVWA3Y",
        },
        extinguishersState: initialExtinguisherState,
      });

      const cardTitle = extinguishersMock[0].brand;

      const card = screen.getByRole("heading", { name: cardTitle });

      const button = screen.getByAltText("close button");

      await userEvent.click(button);

      const expectedModalText = `${modals.deleteItemSuccess.text}`;

      const modal = await screen.getByAltText(expectedModalText);

      expect(modal).toBeInTheDocument();

      expect(card).not.toBeInTheDocument();
    });
  });
});

describe("Given a deleteExtinguisher function", () => {
  describe("When it is rendered, the user tries to delete an extinguisher of his own and it fails", () => {
    test(`Then it should show a '${modals.deleteItemError.text}' modal`, async () => {
      server.resetHandlers(...errorHandlers);

      const initialExtinguisherState: ExtinguishersStateStructure = {
        extinguishers: extinguishersMock,
        loadNumber: 1,
        numberOfExtinguishersAtDb: 3,
        classFilter: "",
        selectedExtinguisher: {} as ExtinguisherStructure,
      };

      const newRoutes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <Navigate to={`${paths.extinguishers}`} replace />,
            },
            {
              path: `${paths.extinguishers}`,
              element: <ListPage />,
            },
          ],
        },
      ];

      const testRouter = createMemoryRouter(newRoutes);

      renderWithProviders(<RouterProvider router={testRouter} />, {
        userState: {
          isLogged: true,
          id: extinguishersMock[0].user,
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODYwODIxNDYsImV4cCI6MTcxMjAwMjE0Nn0.7o2BZ7LtDBQK6dlZqv4fNvPqg3Mv-efllBXFrpVWA3Y",
        },
        extinguishersState: initialExtinguisherState,
      });

      const button = screen.getByAltText("close button");

      await userEvent.click(button);

      const expectedModalText = `${modals.deleteItemError.text}`;

      const modal = await screen.getByAltText(expectedModalText);

      expect(modal).toBeInTheDocument();
    });
  });
});
