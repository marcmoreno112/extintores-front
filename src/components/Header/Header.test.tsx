import Header from "./Header";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'extintores logo'", () => {
      const expectedAltText = "extintores logo";

      renderRouterWithProviders(<Header />);

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
