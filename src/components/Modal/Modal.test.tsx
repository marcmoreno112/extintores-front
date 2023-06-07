import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { vi } from "vitest";
import modals from "./modals";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Modal component", () => {
  const action = vi.fn();

  const expectedText = "Test error";

  const modalMock = modals.wrongCredentials;

  modalMock.text = expectedText;

  describe("When it receives a modal with the text 'Test error' and an action", () => {
    test("Then it should show an image with the text 'Test error'", async () => {
      renderWithProviders(<Modal action={action} modal={modalMock} />);

      const img = await screen.findByAltText(expectedText);

      expect(img).toBeInTheDocument();
    });
    describe("And the user click the button", () => {
      test("Then the action should be called", async () => {
        renderWithProviders(<Modal action={action} modal={modalMock} />);

        const button = await screen.findByRole("button");

        await userEvent.click(button);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
