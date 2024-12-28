import axios, { AxiosResponse } from "axios";
import { ACCESS_TOKEN } from "../constants";

// Definir el tipo de los datos que esperas recibir
interface Merchant {
  id: number;
  business_name: string;
  business_type: string;
  location: string;
  phone_number: string;
  user: number;
}
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default api; // Promise.reject(error) is equivalent to return Promise.reject(error)

export const getAllMerchants = async (): Promise<Merchant[]> => {
  try {
    const response: AxiosResponse<Merchant[]> = await axios.get(
      //`${import.meta.env.VITE_API_URL}merchants/`
      "http://localhost:8000/api/v1/merchants/"
    );
    return response.data; // Retorna la lista de comerciantes
  } catch (error) {
    console.error("Error fetching merchants:", error);
    throw error; // Lanza el error para manejo posterior
  }
};
