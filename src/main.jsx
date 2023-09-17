import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../materialUi.js";
import "react-toastify/dist/ReactToastify.css";

/*
  BUG:
    Filter or Order
    Then try to add to kart
    Behaviour: List re-renders
    NOT EXPECTED
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
