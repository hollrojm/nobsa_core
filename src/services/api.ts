import axios, { AxiosResponse } from "axios";

// Definir el tipo de los datos que esperas recibir
interface Merchant {
  id: number;
  business_name: string;
  business_type: string;
  location: string;
  phone_number: string;
  user: number;
}

export const getAllMerchants = async (): Promise<Merchant[]> => {
  try {
    const response: AxiosResponse<Merchant[]> = await axios.get(
      "http://localhost:8000/api/v1/merchants/"
    );
    return response.data; // Retorna la lista de comerciantes
  } catch (error) {
    console.error("Error fetching merchants:", error);
    throw error; // Lanza el error para manejo posterior
  }
};
