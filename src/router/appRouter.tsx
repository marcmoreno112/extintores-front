import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage";
import paths from "../utils/paths";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${paths.user}${paths.login}`} replace />,
      },
      {
        path: `${paths.user}${paths.login}`,
        element: <LoginPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
