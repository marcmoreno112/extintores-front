import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives an actionOnClick and an image with the altText 'hello'", () => {
    test("Then it should show the image", () => {
      const actionOnClick = vi.fn();
      const className = "";
      const altText = "hello";

      render(
        <Button className={className} actionOnClick={actionOnClick}>
          <img alt={altText} />
        </Button>
      );

      const button = screen.getByAltText(altText);

      expect(button).toBeInTheDocument();
    });
    test("Then it should", async () => {
      const actionOnClick = vi.fn();
      const className = "";
      const altText = "hello";

      render(
        <Button className={className} actionOnClick={actionOnClick}>
          <img alt={altText} />
        </Button>
      );

      const button = screen.getByAltText(altText);
      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
