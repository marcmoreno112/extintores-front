import { screen } from "@testing-library/react";
import { getExtinguisherMock } from "../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { renderWithProviders } from "../../utils/testUtils";
import ExtinguisherCard from "./ExtinguisherCard";

describe("Given a ExtinguisherCard component", () => {
  const extinguisher = getExtinguisherMock();

  describe("When it receives a extinguisher", () => {
    test("Then it should show the model of the extinguisher", () => {
      renderWithProviders(
        <ExtinguisherCard
          isOwner={false}
          extinguisher={extinguisher}
          isLazy="eager"
        />
      );

      const extinguisherTitle = extinguisher.model;

      const title = screen.getByRole("heading", { name: extinguisherTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
