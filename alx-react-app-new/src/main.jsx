// import libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import styles
import "./index.css";

// import components
import App from "./App.jsx";
import { Counter } from "./components/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
  </StrictMode>,
);
