import userEvent from "@testing-library/user-event";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { extinguishersMock } from "../../../mocks/extinguishersMocks";
import { ExtinguishersStateStructure } from "../../../store/extinguishers/types";
import modals from "../../Modal/modals";
import App from "../App";
import paths from "../../../router/paths";
import ListPage from "../../../pages/ListPage/ListPage";
import { renderWithProviders } from "../../../utils/testUtils";
import AddExtinguisherPage from "../../../pages/AddExtinguisherPage/AddExtinguisherPage";
import { screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When it is rendered, the user navigates to AddExtinguisher page and sends the form", () => {
    test(`Then it should show a '${modals.createItemSuccess.text}' modal`, async () => {
      const initialExtinguisherState: ExtinguishersStateStructure = {
        extinguishers: extinguishersMock,
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
            {
              path: `${paths.add}`,
              element: <AddExtinguisherPage />,
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

      const expectedLinkText = "Create element";

      const addNavLink = screen.getByRole("link", {
        name: expectedLinkText,
      });

      await userEvent.click(addNavLink);

      const expectedButtonText = "Crear";

      const expectedLabels = [
        "Marca",
        "Modelo",
        "URL de la imagen",
        "Descripción",
        "Desventajas",
        "Fortalezas",
        "Agente extintor",
        "Vida útil",
        "Clase A",
        "Clase B",
        "Clase C",
        "Clase D",
        "Clase K",
      ];

      const text = "hello";

      for (const label of expectedLabels) {
        const input = await screen.findByLabelText(label);

        await userEvent.type(input, text);
      }

      const aClassCheckboxText = "Clase A";

      const aClassCheckbox = await screen.findByLabelText(aClassCheckboxText);

      await userEvent.click(aClassCheckbox);

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      const expectedModalText = `${modals.createItemSuccess.text}`;

      const modal = await screen.getByAltText(expectedModalText);

      expect(modal).toBeInTheDocument();
    });
  });
});
