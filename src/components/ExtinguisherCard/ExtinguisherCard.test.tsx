import { screen } from "@testing-library/react";
import { extinguisherMock } from "../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { renderWithProviders } from "../../utils/testUtils";
import ExtinguisherCard from "./ExtinguisherCard";

describe("Given a ExtinguisherCard component", () => {
  describe("When it receives a extinguisher", () => {
    test("Then it should show the model of the extinguisher", () => {
      const extinguisher = extinguisherMock();

      renderWithProviders(<ExtinguisherCard extinguisher={extinguisher} />);

      const extinguisherTitle = extinguisher.model;

      const title = screen.getByRole("heading", { name: extinguisherTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
