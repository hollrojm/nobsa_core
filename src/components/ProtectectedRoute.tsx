import { Navigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode"; // Asegúrate de tener jwt-decode instalado y actualizado
import api from "../services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState, useEffect, ReactElement } from "react";

interface ProtectedRouteProps {
  element: ReactElement;
}

interface DecodedToken extends JwtPayload {
  exp?: number; // JWT expiration field
}

function ProtectedRoute({ element }: ProtectedRouteProps): ReactElement | null {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      await auth();
    };

    checkAuth().catch(() => setIsAuthorized(false));
  }, []);

  const refreshToken = async (): Promise<void> => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken) {
      setIsAuthorized(false);
      return;
    }

    try {
      const response = await api.post("/auth/token/refresh/", {
        refresh: refreshToken,
      });

      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setIsAuthorized(false);
    }
  };

  const auth = async (): Promise<void> => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const tokenExpiration = decoded.exp;
      const currentTime = Date.now() / 1000;

      if (tokenExpiration && tokenExpiration < currentTime) {
        await refreshToken();
      } else {
        setIsAuthorized(true);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      setIsAuthorized(false);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
