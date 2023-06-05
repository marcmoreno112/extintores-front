import { screen } from "@testing-library/react";
import Loader from "./Loader";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Cargando'", () => {
      const expectedText = "Cargando";

      renderWithProviders(<Loader />);

      const loader = screen.getByText(expectedText);

      expect(loader).toBeInTheDocument();
    });
  });
});
