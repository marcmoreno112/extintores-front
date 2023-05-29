import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/archivo";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
