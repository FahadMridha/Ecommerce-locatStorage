import { createBrowserRouter } from "react-router-dom";
import MyCart from "../MyCart/MyCart";
import Home from "./home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/mycart",
    element: <MyCart />,
  },
]);
