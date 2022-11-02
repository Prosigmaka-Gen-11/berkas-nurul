import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./AuthProvider";

import Home from "./Home";
import Login from "./Login";
import Post from "./Post";
import Comment from "./Comment";
import ProtectedLayout from "./ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <ProtectedLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post", element: <Post /> },
      { path: "/comment", element: <Comment /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
