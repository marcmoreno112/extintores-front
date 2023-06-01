import { screen } from "@testing-library/react";
import { renderWithProvidersRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Login' title", () => {
      const expectedTitle = "Login";

      renderWithProvidersRouter(<LoginPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
