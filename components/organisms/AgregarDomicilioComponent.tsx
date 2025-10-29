// components/organisms/AgregarDomicilioComponent.tsx
"use client";

import React, { useState } from "react";
import { FaBriefcase, FaHome, FaChevronDown } from "react-icons/fa";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AgregarDomicilioComponent() {
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombreApellido: "",
    departamento: "",
    municipio: "",
    barrio: "",
    tipoCalle: "",
    calle: "",
    numero: "",
    numeroBis: "",
    noTengoNumero: false,
    pisoDepartamento: "",
    tipoDireccion: "",
    telefono: "",
    referencias: ""
  });

  useEffect(() => {
    if (!isLoggedIn || !user) {
      router.push('/login');
    }
  }, [isLoggedIn, user, router]);

  if (!isLoggedIn || !user) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí procesarías el formulario
    console.log('Datos del formulario:', formData);
    // Redirigir después de guardar
    router.push('/createproduct');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Agregar domicilio</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre y apellido */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre y apellido
              </label>
              <input
                type="text"
                name="nombreApellido"
                value={formData.nombreApellido}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Tal cual figure en el documento.</p>
            </div>

            {/* Departamento y Municipio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departamento
                </label>
                <div className="relative">
                  <select
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="antioquia">Antioquia</option>
                    <option value="bogota">Bogotá D.C.</option>
                    <option value="valle">Valle del Cauca</option>
                    <option value="atlantico">Atlántico</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Municipio, capital o localidad
                </label>
                <div className="relative">
                  <select
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="manizales">Manizales</option>
                    <option value="medellin">Medellín</option>
                    <option value="cali">Cali</option>
                    <option value="barranquilla">Barranquilla</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Barrio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Barrio
              </label>
              <input
                type="text"
                name="barrio"
                value={formData.barrio}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Tipo de calle y Calle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de calle
                </label>
                <input
                  type="text"
                  name="tipoCalle"
                  value={formData.tipoCalle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calle
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="calle"
                    value={formData.calle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Completa solo con el nombre y el prefijo. Ej: 22 Sur.</p>
              </div>
            </div>

            {/* Número */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="text"
                  name="numeroBis"
                  value={formData.numeroBis}
                  onChange={handleInputChange}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="flex items-center gap-2 ml-4">
                  <input
                    type="checkbox"
                    name="noTengoNumero"
                    checked={formData.noTengoNumero}
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700">No tengo número</span>
                </label>
              </div>
            </div>

            {/* Piso/Departamento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Piso/Departamento (opcional)
              </label>
              <input
                type="text"
                name="pisoDepartamento"
                value={formData.pisoDepartamento}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Tipo de dirección */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Es tu trabajo o tu casa?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tipoDireccion"
                    value="trabajo"
                    checked={formData.tipoDireccion === "trabajo"}
                    onChange={handleInputChange}
                    className="text-blue-600"
                  />
                  <FaBriefcase className="text-gray-600" />
                  <span className="text-sm text-gray-700">Trabajo</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tipoDireccion"
                    value="casa"
                    checked={formData.tipoDireccion === "casa"}
                    onChange={handleInputChange}
                    className="text-blue-600"
                  />
                  <FaHome className="text-gray-600" />
                  <span className="text-sm text-gray-700">Casa</span>
                </label>
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono de contacto
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Referencias */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referencias adicionales de esta dirección
              </label>
              <div className="relative">
                <textarea
                  name="referencias"
                  value={formData.referencias}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={128}
                  placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {formData.referencias.length}/128
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Guardar domicilio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
