import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "react-dom";
import BrowserRoutes from "browserroutersource";
import Router from "react-router";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
