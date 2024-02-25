import axios from "axios";
import React from "react";
import { createMemoryRouter,
  RouterProvider
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import MainPage from "pages/Main";
import GamePage from "pages/Game";
import GameRetryPage from "pages/Game/_pages/Retry";
import GameFinishPage from "pages/Game/_pages/Finish";

import "./style/index.scss";

if (document.location.href) {
  axios.defaults.headers.common["Authorization"] = `VK ${document.location.href}`;
}

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.responseType = "json";

const router = createMemoryRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/game",
    element: <GamePage />
  },
  {
    path: "/game/retry",
    element: <GameRetryPage />
  },
  {
    path: "/game/finish",
    element: <GameFinishPage />
  }
], {
  initialEntries: ["/"]
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
