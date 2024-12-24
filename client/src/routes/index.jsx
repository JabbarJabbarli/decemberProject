import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import ListingPage from "../pages/listing";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/listing",
    element: <ListingPage />,
  },
]);
