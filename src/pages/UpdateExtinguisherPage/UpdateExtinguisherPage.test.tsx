import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import UpdateExtinguisherPage from "./UpdateExtinguisherPage";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths";
import { store } from "../../store";
import { server } from "../../mocks/server";
import {
  errorGettingSelectedItemHandlers,
  errorUpdatingHandler,
  handlers,
} from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";
import { ExtinguisherStructure } from "../../types";
import { extinguishersMock } from "../../mocks/extinguishersMocks";
import App from "../../components/App/App";
import ListPage from "../ListPage/ListPage";
import modals from "../../components/Modal/modals";

describe("Given an UpdateExtinguisherPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Actualizar extintor' title", async () => {
      const expectedTitle = "Actualizar extintor";

      server.resetHandlers(...errorGettingSelectedItemHandlers);

      const route: RouteObject[] = [
        { path: "/*", element: <UpdateExtinguisherPage /> },
      ];

      const extinguisherId =
        store.getState().extinguishersState.updatingExtinguisher.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `${paths.update}/${extinguisherId}`],
      });

      renderWithProviders(<RouterProvider router={router} />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks de 'Actualizar' button", () => {
    test("Then it should show a 'Extintores' title", async () => {
      server.resetHandlers(...handlers);

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
            {
              path: `${paths.update}/:id`,
              element: <UpdateExtinguisherPage />,
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
        extinguishersState: {
          extinguishers: extinguishersMock,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 3,
          classFilter: "",
          selectedExtinguisher: {
            brand: "",
            class: ["A"],
            description: "",
            disadvantages: "",
            fireExtinguishingAgent: "",
            id: "",
            img: "",
            model: "",
            strengths: "",
            usefulLife: "",
            user: "",
          },
          updatingExtinguisher: {} as ExtinguisherStructure,
        },
      });

      const expectedLinkTestId = "modify-button";

      const modifyLink = await waitFor(() =>
        screen.getAllByTestId(expectedLinkTestId)
      );

      await userEvent.click(modifyLink[0]);

      const expectedButtonText = "Actualizar";

      const button = await waitFor(() =>
        screen.getByRole("button", {
          name: expectedButtonText,
        })
      );

      await userEvent.click(button);

      const expectedTitle = "Extintores";

      const title = await waitFor(() =>
        screen.getByRole("heading", { name: expectedTitle, level: 2 })
      );

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks de 'Actualizar' button and the API rejects", () => {
    test(`Then it should show a '${modals.updateItemError.text}' title`, async () => {
      server.resetHandlers(...errorUpdatingHandler);

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
            {
              path: `${paths.update}/:id`,
              element: <UpdateExtinguisherPage />,
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
        extinguishersState: {
          extinguishers: extinguishersMock,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 3,
          classFilter: "",
          selectedExtinguisher: {
            brand: "",
            class: ["A"],
            description: "",
            disadvantages: "",
            fireExtinguishingAgent: "",
            id: "",
            img: "",
            model: "",
            strengths: "",
            usefulLife: "",
            user: "",
          },
          updatingExtinguisher: {} as ExtinguisherStructure,
        },
      });

      const expectedLinkTestId = "modify-button";

      const modifyLink = await waitFor(() =>
        screen.getAllByTestId(expectedLinkTestId)
      );

      await userEvent.click(modifyLink[0]);

      const expectedButtonText = "Actualizar";

      const button = await waitFor(() =>
        screen.getByRole("button", {
          name: expectedButtonText,
        })
      );

      await userEvent.click(button);

      const expectedTitle = `${modals.updateItemError.text}`;

      const title = await waitFor(() => screen.getByAltText(expectedTitle));

      expect(title).toBeInTheDocument();
    });
  });
});
