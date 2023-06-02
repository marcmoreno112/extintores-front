import Header from "./Header";
import { screen } from "@testing-library/react";
import { renderWithProvidersRouter } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Extintores'", () => {
      const expectedTitle = "Extintores";

      renderWithProvidersRouter(<Header />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
