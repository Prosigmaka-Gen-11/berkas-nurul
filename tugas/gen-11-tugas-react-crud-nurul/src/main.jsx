import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductLayout from "./pages/ProductLayout";
import ProductForm from "./pages/ProductForm";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/product",
    element: <ProductLayout />,
    children: [
      { path: "form", element: <ProductForm /> },
      { path: "list", element: <ProductList /> },
      { path: ":productId", element: <ProductDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
