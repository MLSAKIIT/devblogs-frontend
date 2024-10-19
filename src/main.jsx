import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { ThemeProvider } from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
