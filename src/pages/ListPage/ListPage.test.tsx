import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import ListPage from "./ListPage";

describe("Given a ListPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Extintores' title", () => {
      const expectedTitle = "Extintores";

      renderWithProviders(<ListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
