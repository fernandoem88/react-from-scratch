import React from "react";
import { createRoot } from "react-dom/client";
import HomeApp from "./apps/Home";
import "./App.scss";

const root = createRoot(document.getElementById("app-root"));

root.render(<HomeApp />);
