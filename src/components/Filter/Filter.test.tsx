import { screen } from "@testing-library/react";
import Filter from "./Filter";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select component with the text 'Selecciona clase de extintor'", () => {
      const expectedText = "Selecciona clase de extintor";

      renderWithProviders(<Filter />);

      const select = screen.getByText(expectedText);

      expect(select).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the user selects the option 'Clase K'", () => {
    test("Then it should show the text 'Clase K'", async () => {
      renderWithProviders(<Filter />);

      const select = screen.getByRole("combobox");

      const selectText = "K";

      await userEvent.selectOptions(select, selectText);

      screen.debug();

      const shownText = "Clase K";

      const newSelect = screen.getByText(shownText);

      expect(newSelect).toBeInTheDocument();
    });
  });
});
