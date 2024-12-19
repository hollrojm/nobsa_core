import { useState } from "react";
import { MerchantPage } from "./pages/MerchantsPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MerchantFormPage } from "./pages/MerchantsFormPage";

function App() {
  const [] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/merchants" />}></Route>
        <Route path="/merchants" element={<MerchantPage />}></Route>
        <Route path="/merchants-create" element={<MerchantFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
