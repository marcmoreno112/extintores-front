import { screen } from "@testing-library/react";
import ExtinguishersList from "./ExtinguishersList";
import { renderWithProviders } from "../../utils/testUtils";
import { extinguishersMock } from "../../mocks/factories/extinguisherFactory/extinguisherFactory";

describe("Given a ExtinguishersList component", () => {
  describe("When it receives a list of extinguishers", () => {
    test("Then it should show the title of the first one", () => {
      const extinguishersListMock = extinguishersMock(3);

      const expectedTitle = extinguishersListMock[0].brand;

      renderWithProviders(
        <ExtinguishersList extinguishers={extinguishersListMock} />
      );

      const resultTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
