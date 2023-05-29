import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Extintores'", () => {
      const expectedTitle = "Extintores";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Header />,
        },
      ];

      const mockRouter = createBrowserRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={mockRouter} />
          </Provider>
        </ThemeProvider>
      );

      const plus = screen.getByRole("heading", { name: expectedTitle });

      expect(plus).toBeInTheDocument();
    });
  });
});
