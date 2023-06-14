import { screen } from "@testing-library/react";
import { extinguishersMock } from "../../mocks/extinguishersMocks";
import { renderRouterWithProviders } from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a DetailPage page", () => {
  describe("When it is rendered with a valid id as params", () => {
    test("Then it should show the title of the detail", () => {
      const expectedTitle = extinguishersMock[0].brand;

      renderRouterWithProviders(<DetailPage />, {
        extinguishersState: {
          classFilter: "A",
          extinguishers: extinguishersMock,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 10,
          selectedExtinguisher: extinguishersMock[0],
          updatingExtinguisher: {
            brand: "",
            class: [""],
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
        },
      });

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered with an invalid id as params", () => {
    test("Then it should show the title 'No se encuentra la página'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedTitle = "No se encuentra la página";

      renderRouterWithProviders(<DetailPage />, {
        extinguishersState: {
          classFilter: "A",
          extinguishers: extinguishersMock,
          loadNumber: 1,
          numberOfExtinguishersAtDb: 10,
          selectedExtinguisher: {
            brand: "",
            class: [""],
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
          updatingExtinguisher: {
            brand: "",
            class: [""],
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
        },
      });

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
