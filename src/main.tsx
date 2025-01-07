import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MerchantPage } from "./pages/MerchantsPage";
import { MerchantFormPage } from "./pages/MerchantsFormPage";
import { Navigation } from "./components/Navigation";
import { LoginPage } from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectectedRoute";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Redirige automáticamente a la página de login */}
        <Route path="/" element={<Navigate to="/app" />} />

        <Route path="/app" element={<App />} />

        {/* Página principal de merchants */}
        <Route
          path="/merchants"
          element={<ProtectedRoute element={<MerchantPage />} />}
        />

        {/* Página para crear un nuevo merchant */}
        <Route
          path="/merchants-create"
          element={<ProtectedRoute element={<MerchantFormPage />} />}
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
