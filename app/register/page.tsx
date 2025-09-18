"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  email: string;
  phone: string;
  name: string;
  password: string;
  acceptSMS: boolean;
  acceptTerms: boolean;
}

const RegisterPage = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    phone: "",
    name: "",
    password: "",
    acceptSMS: false,
    acceptTerms: true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulación de llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí iría la llamada real al backend
      // const res = await fetch("http://localhost:3000/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      // if (res.ok) {
      //   router.push("/");
      // } else {
      //   setError("Error en el registro");
      // }
      
      // Simulación de registro exitoso
      console.log("Datos enviados:", formData);
      alert("Registro exitoso (simulado)");
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-sm shadow-sm w-full max-w-md">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-light text-center text-gray-800">
            Crea tu cuenta y compra con envíos gratis
          </h1>
        </div>
        
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col gap-4"
          >
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+57"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              id="acceptSMS"
              name="acceptSMS"
              checked={formData.acceptSMS}
              onChange={handleChange}
              className="mt-1 mr-3 h-4 w-4"
            />
            <label htmlFor="acceptSMS" className="text-sm text-gray-600">
              Acepto que me contacten por SMS y WhatsApp.
            </label>
          </div>
          
          <div className="mb-6 flex items-start">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1 mr-3 h-4 w-4"
              required
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
              Al "Continuar", autorizo el uso de mis datos de acuerdo a la Declaración de privacidad y acepto los Términos y condiciones y la Autorización de tratamiento de datos.
            </label>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-sm hover:bg-blue-700 transition font-bold text-sm disabled:opacity-70"
          >
            {loading ? "Procesando..." : "Continuar"}
          </button>
        </form>
        
        <div className="border-t border-gray-200 p-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-blue-600 hover:text-blue-800 transition">
              Ingresa
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;