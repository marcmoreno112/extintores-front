import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyListPage = lazy(() => import("../pages/ListPage/ListPage"));

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddExtinguisherPage = lazy(
  () => import("../pages/AddExtinguisherPage/AddExtinguisherPage")
);

export const LazyDetailPage = lazy(
  () => import("../pages/DetailPage/DetailPage")
);

export const LazyUpdatePage = lazy(
  () => import("../pages/UpdateExtinguisherPage/UpdateExtinguisherPage")
);
