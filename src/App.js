import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Products from "./Products/Products";
import Navbar from "./navbar/Navbar";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
