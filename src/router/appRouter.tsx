import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import paths from "./paths";
import {
  LazyAddExtinguisherPage,
  LazyDetailPage,
  LazyListPage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazyUpdatePage,
} from "./lazyPages";

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
        path: `${paths.add}`,
        element: (
          <Suspense>
            <LazyAddExtinguisherPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.detail}/:id`,
        element: (
          <Suspense>
            <LazyDetailPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.update}/:id`,
        element: (
          <Suspense>
            <LazyUpdatePage />
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
