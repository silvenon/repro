import { createRoot } from "react-dom/client";
import App from "./app";
import "./tailwind.css";

const rootEl = document.getElementById("app")!;
const root = createRoot(rootEl);

root.render(<App />);
