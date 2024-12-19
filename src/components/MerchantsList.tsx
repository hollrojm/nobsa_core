import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Merchant } from '../types/merchant';

const MerchantsList: React.FC = () => {
    const [merchants, setMerchants] = useState<Merchant[]>([]);
  
    // Obtener datos de la API al cargar el componente
    useEffect(() => {
      api.get('merchants/')
        .then((response) => {
          setMerchants(response.data);
        })
        .catch((error) => {
          console.error('Error fetching merchants:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Lista de Comerciantes</h1>
        <ul>
          {merchants.map((merchant) => (
            <li key={merchant.id}>
              <strong>{merchant.business_name}</strong> - {merchant.business_type}
              <p>Ubicación: {merchant.location}</p>
              <p>Teléfono: {merchant.phone_number}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MerchantsList;