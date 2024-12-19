import React from "react";
import { MerchantsList } from "../components/MerchantsList";

interface MerchantPageProps {
  // Si tienes props, agrégalos aquí
}

export const MerchantPage: React.FC<MerchantPageProps> = () => {
  return <MerchantsList></MerchantsList>;
};
