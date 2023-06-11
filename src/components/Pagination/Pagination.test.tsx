import { screen } from "@testing-library/react";
import Pagination from "./Pagination";
import { renderWithProviders } from "../../utils/testUtils";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { initialExtinguishersState } from "../../store/extinguishers/extinguishersSlice";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Cargar más...'", () => {
      const expectedButtonText = "Cargar más...";

      const loadMoreFunction = vi.fn();

      renderWithProviders(
        <Pagination isDisabled="" loadMoreAction={loadMoreFunction} />
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'Cargar más' button", () => {
    test("Then the function of the button should be called", async () => {
      const expectedButtonText = "Cargar más...";

      const loadMoreFunction = vi.fn();

      renderWithProviders(
        <Pagination isDisabled="" loadMoreAction={loadMoreFunction} />,
        {
          extinguishersState: initialExtinguishersState,
        }
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(loadMoreFunction).toHaveBeenCalled();
    });
  });
});
