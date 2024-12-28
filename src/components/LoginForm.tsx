import React, { useState, FormEvent } from "react";
import { Card, CardContent } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Checkbox } from "../components/Checkbox";

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void;
  onSocialLogin?: (provider: "facebook" | "google") => void;
}

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onSocialLogin }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleSocialLogin = (provider: "facebook" | "google"): void => {
    onSocialLogin?.(provider);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Hola Viajero!</h1>
              <p className="text-gray-600">Bienvenido</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2 relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked: boolean) =>
                      setFormData((prev) => ({ ...prev, rememberMe: checked }))
                    }
                  />
                  <label htmlFor="remember" className="text-sm">
                    Recuerdame
                  </label>
                </div>
                <a href="#" className="text-sm text-pink-600 hover:underline">
                  Olvidaste tu contraseña?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Ingresar
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    o continua con
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSocialLogin("facebook")}
                >
                  <img
                    src="/facebook-icon.png"
                    alt="Facebook"
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleSocialLogin("google")}
                >
                  <img
                    src="/google-icon.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </Button>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600">no tienes una cuenta? </span>
                <a href="#" className="text-pink-600 hover:underline">
                  Registrate
                </a>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
