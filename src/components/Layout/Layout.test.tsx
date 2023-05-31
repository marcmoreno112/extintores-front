import { screen } from "@testing-library/react";
import { renderWithProvidersRouter } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Extintores' title", () => {
      const expectedTitle = "Extintores";

      renderWithProvidersRouter(<Layout />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});