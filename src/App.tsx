//import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MerchantPage } from "./pages/MerchantsPage";
import { MerchantFormPage } from "./pages/MerchantsFormPage";

const App: React.FC = () => {
  // const [count, setCount] = useState<number>(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirige automáticamente a la página de merchants */}
        <Route path="/" element={<Navigate to="/merchants" />} />

        {/* Página principal de merchants */}
        <Route path="/merchants" element={<MerchantPage />} />

        {/* Página para crear un nuevo merchant */}
        <Route path="/merchants-create" element={<MerchantFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
