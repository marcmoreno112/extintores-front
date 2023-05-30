import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const routes: RouteObject[] = [
    {
      path: "/",
      element: ui,
    },
  ];

  const mockRouter = createMemoryRouter(routes);

  const Wrapper = (): React.ReactElement => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={mockRouter} />
        </ThemeProvider>
      </Provider>
    );
  };

  render(ui, { wrapper: Wrapper });
};
