import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/index";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
