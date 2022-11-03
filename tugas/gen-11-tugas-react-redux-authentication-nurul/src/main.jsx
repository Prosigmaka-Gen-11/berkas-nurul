import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ProtectedLayout from "./ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <ProtectedLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
