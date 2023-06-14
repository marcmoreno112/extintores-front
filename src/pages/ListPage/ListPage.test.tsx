import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { ExtinguishersStateStructure } from "../../store/extinguishers/types";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { extinguishersMock } from "../../mocks/extinguishersMocks";
import { getExtinguishersMock } from "../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { store } from "../../store";
import { ExtinguisherStructure } from "../../types";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a ListPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Extintores' title", () => {
      const expectedTitle = "Extintores";

      renderRouterWithProviders(<ListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks the delete button of a extinguisher", () => {
    test("Then the extinguisher should disappear", async () => {
      const initialExtinguisherState: ExtinguishersStateStructure = {
        extinguishers: extinguishersMock,
        loadNumber: 1,
        numberOfExtinguishersAtDb: 3,
        classFilter: "",
        selectedExtinguisher: {} as ExtinguisherStructure,
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
      };

      renderRouterWithProviders(<ListPage />, {
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

      const buttonName = "close button";

      const card = screen.getByRole("heading", { name: cardTitle });

      const buttons = screen.getAllByRole("button", { name: buttonName });

      await userEvent.click(buttons[0]);

      expect(card).not.toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'Cargar más...' button", () => {
    test("Then it should show the title 'Extintores'", async () => {
      const initialExtinguishers = getExtinguishersMock(3);

      const initialExtinguishersState: ExtinguishersStateStructure = {
        extinguishers: initialExtinguishers,
        loadNumber: 1,
        numberOfExtinguishersAtDb: 3,
        classFilter: "",
        selectedExtinguisher: {} as ExtinguisherStructure,
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
      };

      renderRouterWithProviders(<ListPage />, {
        extinguishersState: initialExtinguishersState,
      });

      expect(store.getState().extinguishersState.loadNumber).toBe(
        initialExtinguishersState.loadNumber
      );

      const pageTitleText = "Extintores";

      const pageTitle = await screen.findByRole("heading", {
        name: pageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();

      const loadMoreButtonText = "Cargar más...";

      const loadMoreButton = await screen.findByRole("button", {
        name: loadMoreButtonText,
      });

      await userEvent.click(loadMoreButton);

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
