import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./app";
import "./tailwind.css";

const root = createRoot(document.getElementById("app")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
