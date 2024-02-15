import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import UsersScreen from "./screens/UsersScreen";
import PostsScreen from "./screens/PostsScreen";
import ContextScreen from "./screens/ContextScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UsersScreen />,
      },
      {
        path: "/posts",
        element: <PostsScreen />,
      },
      {
        path: "/context",
        element: <ContextScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
