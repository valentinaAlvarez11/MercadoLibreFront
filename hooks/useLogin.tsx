"use client";

import { useState, FormEvent } from "react";

type UseLoginReturn = {
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  error: string | null;
  success: boolean;
  loading: boolean;
  handleSubmit: (e?: FormEvent) => Promise<void>;
};

export default function useLogin(): UseLoginReturn {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e?: FormEvent) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contraseña: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        console.log("Login exitoso:", data);
      } else {
        setError(data?.error ?? "Ocurrió un error al iniciar sesión.");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor. Inténtalo de nuevo.");
      console.error("Error de conexión:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    loading,
    handleSubmit,
  };
}
