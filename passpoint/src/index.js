import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        <App />
      </Router>
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
