import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import paths from "./paths";
import { LazyListPage, LazyLoginPage, LazyNotFoundPage } from "./lazyPages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${paths.extinguishers}`} replace />,
      },
      {
        path: `${paths.login}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.extinguishers}`,
        element: (
          <Suspense>
            <LazyListPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
