import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import UserInfo from "@/pages/UserInfo";
import Layout from "@/pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:influencerId",
        element: <UserInfo />,
      },
    ],
  },
]);

export default router;
