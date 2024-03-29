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
import bridge from "@vkontakte/vk-bridge";
import RatingPage from "pages/Rating";

import "./style/index.scss";

if (document.location.href) {
  axios.defaults.headers.common["Authorization"] = `VK ${document.location.href.replace("file", "https")}`;
}

axios.defaults.baseURL = "https://googler-api.skyreglis.com/";
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
  },
  {
    path: "/rating",
    element: <RatingPage />
  }
], {
  initialEntries: ["/"]
});

bridge.send("VKWebAppInit")
  .catch((err) => console.error(err));

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
