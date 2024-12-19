import { useEffect, useState } from "react";
import { getAllMerchants } from "../services/api"; // Asegúrate de que esta ruta sea correcta

// Definir la interfaz de Merchant para un mejor tipado
interface Merchant {
  id: number;
  business_name: string;
  business_type: string;
  location: string;
  phone_number: string;
  user: number;
  // Agrega más campos si es necesario
}

export function MerchantsList() {
  const [merchants, setMerchants] = useState<Merchant[]>([]); // Estado para los comerciantes
  const [loading, setLoading] = useState<boolean>(true); // Estado para el estado de carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // Usamos useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    const loadMerchants = async () => {
      try {
        const data = await getAllMerchants(); // Esperamos a obtener la respuesta
        setMerchants(data);
        console.log(data); // Actualizamos el estado con los datos obtenidos
      } catch (error) {
        setError("Error fetching merchants."); // Si ocurre un error, lo mostramos
      } finally {
        setLoading(false); // Indicamos que la carga ha terminado
      }
    };

    loadMerchants(); // Llamamos a la función para cargar los datos
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) return <div>Loading...</div>; // Muestra un mensaje de carga
  if (error) return <div>{error}</div>; // Muestra el error si ocurrió

  return (
    <div>
      <h1>Lista de Comercios</h1>
      <ul>
        {merchants.map((merchant) => (
          <li key={merchant.id}>{merchant.business_name}</li>
        ))}
      </ul>
    </div>
  );
}
