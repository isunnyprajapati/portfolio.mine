import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/meee.css";

createRoot(document.querySelector(".__meeee")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
