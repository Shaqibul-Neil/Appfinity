import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Component/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSpinner from "../Component/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner count={8} />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      { path: "/apps/:id", Component: AppDetails },
    ],
  },
]);

export default router;
