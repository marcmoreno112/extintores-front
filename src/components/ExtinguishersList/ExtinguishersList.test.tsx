import { screen } from "@testing-library/react";
import ExtinguishersList from "./ExtinguishersList";
import { renderWithProviders } from "../../utils/testUtils";
import { getExtinguishersMock } from "../../mocks/factories/extinguisherFactory/extinguisherFactory";

describe("Given a ExtinguishersList component", () => {
  describe("When it receives a list of extinguishers", () => {
    test("Then it should show the title of the first one", () => {
      const extinguishersListMock = getExtinguishersMock(3);

      const expectedTitle = extinguishersListMock[0].brand;

      renderWithProviders(
        <ExtinguishersList extinguishers={extinguishersListMock} />
      );

      const resultTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
