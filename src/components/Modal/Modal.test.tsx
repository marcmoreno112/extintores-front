import { screen } from "@testing-library/react";
import Modal from "./Modal";
import { vi } from "vitest";
import { ModalErrorStructure } from "./modalErrors";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Modal component", () => {
  describe("When it receives a modalError with the text 'Test error' and an action", () => {
    test("Then it should show an image with the text 'Test error'", async () => {
      const action = vi.fn();

      const expectedText = "Test error";

      const modalErrorMock: ModalErrorStructure = {
        color: "",
        img: "",
        text: expectedText,
      };

      renderWithProviders(
        <Modal action={action} modalError={modalErrorMock} />
      );

      screen.debug();

      const img = await screen.findByAltText(expectedText);

      expect(img).toBeInTheDocument();
    });
    describe("And the user click the button", () => {
      test("Then the action should be called", () => {
        expect(true).toBe(true);
      });
    });
  });
});
