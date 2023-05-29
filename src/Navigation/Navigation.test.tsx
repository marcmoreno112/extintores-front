import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";
import appRouter from "../router/appRouter";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Lista' link", () => {
      const expectedListText = "Lista";
      const expectedLoginText = "Login";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Navigation />,
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

      <RouterProvider router={appRouter} />;

      const lista = screen.getByRole("link", { name: expectedListText });
      const plus = screen.getByAltText("Create element");
      const login = screen.getByRole("link", { name: expectedLoginText });

      expect(lista).toBeInTheDocument();
      expect(plus).toBeInTheDocument();
      expect(login).toBeInTheDocument();
    });
  });
});
