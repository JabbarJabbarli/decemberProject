import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import ListingPage from "../pages/listing";
import Reviews from "../components/Outlet/reviews";
import Details from "../components/Outlet/details";
import { reviewsData } from "../data/reviews";
import { detailsData } from "../data/details";
import Cart from "../pages/cartPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
    children: [
      {
        index: true, // Marks this route as the default child
        element: <Reviews />,
        loader: () => reviewsData,
      },
      {
        path: "reviews",
        element: <Reviews />,
        loader: () => reviewsData,
      },
      {
        path: "details",
        element: <Details />,
        loader: () => detailsData,
      },
    ],
  },
  {
    path: "/listing",
    element: <ListingPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
