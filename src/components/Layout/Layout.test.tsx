import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils";
import Layout from "./Layout";
import { initialUserState } from "../../store/user/userSlice";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alt text 'extintores logo'", () => {
      const expectedAltText = "extintores logo";

      renderRouterWithProviders(<Layout />, { userState: initialUserState });

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
