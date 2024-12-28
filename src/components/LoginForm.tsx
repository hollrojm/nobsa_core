import { useState, FormEvent } from "react";
import api from "../services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

interface LoginFormProps {
  route: string;
  method: "login" | "register";
}

function LoginForm({ route, method }: LoginFormProps) {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await api.post(route, {
        userName,
        password,
      });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          className="form-input"
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Nombre de usuario"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          className="form-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : name}
      </button>
    </form>
  );
}

export default LoginForm;
