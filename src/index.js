import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/JWTContext";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <AuthProvider>
    <HelmetProvider>
      <ToastContainer theme="colored" />
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </AuthProvider>
);
