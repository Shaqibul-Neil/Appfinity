import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Component/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      { path: "/app/:id", Component: AppDetails },
    ],
  },
]);

export default router;
