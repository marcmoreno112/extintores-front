import { screen } from "@testing-library/react";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../utils/testUtils";
import ListPage from "./ListPage";
import { ExtinguishersStateStructure } from "../../store/extinguishers/types";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { extinguishersMock } from "../../mocks/extinguishersMocks";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a ListPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Extintores' title", () => {
      const expectedTitle = "Extintores";

      renderWithProviders(<ListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the user clicks the delete button of a extinguisher", () => {
    test("Then the extinguisher should disappear", async () => {
      const initialExtinguisherState: ExtinguishersStateStructure = {
        extinguishers: extinguishersMock,
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

      const button = screen.getByRole("button", { name: buttonName });

      await userEvent.click(button);

      expect(card).not.toBeInTheDocument();
    });
  });
});
