import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Routing from "./apps/Routing";

const root = createRoot(document.getElementById("app-root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routing />
    </Router>
  </React.StrictMode>
);
