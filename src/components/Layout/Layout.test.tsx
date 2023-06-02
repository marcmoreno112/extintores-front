import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../utils/testUtils";
import Layout from "./Layout";
import { initialUserState } from "../../store/user/userSlice";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Extintores' title", () => {
      const expectedTitle = "Extintores";

      renderRouterWithProviders(<Layout />, { userState: initialUserState });

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
