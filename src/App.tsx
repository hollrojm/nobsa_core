//import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MerchantPage } from "./pages/MerchantsPage";
import { MerchantFormPage } from "./pages/MerchantsFormPage";
import { Navigation } from "./components/Navigation";
import { LoginPage } from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectectedRoute";

const App: React.FC = () => {
  // const [count, setCount] = useState<number>(0);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Redirige automáticamente a la página de login */}
        <Route path="/" element={<Navigate to="/login" />} />

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
  );
};

export default App;
