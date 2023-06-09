import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";

describe("Given a Form component", () => {
  const expectedButtonText = "Crear";
  describe("When it is rendered", () => {
    const expectedLabels = [
      "Marca",
      "Modelo",
      "URL de la imagen",
      "Descripción",
      "Desventajas",
      "Fortalezas",
      "Agente extintor",
      "Vida útil",
      "Clase A",
      "Clase B",
      "Clase C",
      "Clase D",
      "Clase K",
    ];
    expectedLabels.forEach((label) => {
      test(`Then it should show a text field with the label ${label}`, () => {
        renderWithProviders(<Form userId="" buttonText={expectedButtonText} />);

        const labelElement = screen.getByLabelText(label);

        expect(labelElement).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered with the buttonText 'Crear'", () => {
    test("Then it should show a button with the text", () => {
      renderWithProviders(<Form userId="" buttonText={expectedButtonText} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
