import React from "react";

// helpers
import ReactDOM from "react-dom/client";

// components
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// styles
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
