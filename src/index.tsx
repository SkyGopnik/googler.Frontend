import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import MainPage from "pages/Main";

import "./style/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
