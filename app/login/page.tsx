"use client";

import React, { useState , FormEvent } from 'react';
import { Metadata } from 'next';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import mercadolibreLogo from '../assets/mercadolibre1.png';

const MercadolibreLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contraseña: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        console.log('Login exitoso:', data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. Inténtalo de nuevo.');
      console.error('Error de conexión:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-sm font-sans">
      <header className="fixed top-0 left-0 w-full bg-yellow-300 shadow-md p-3 z-10">
        <div className="container mx-auto px-9">
          <Image 
            src={mercadolibreLogo} 
            alt="Mercado Libre Logo" 
            width={130} 
            height={50} 
          />
        </div>
      </header>

      <div className="flex justify-center items-center h-screen bg-white">
        {/* Contenedor de la izquierda para el título */}
        <div className="w-[500px] p-8 pt-15 mr-4 mb-40">
          <h1 className="text-3xl font-semibold text-left">
            Ingresa tu e-mail o teléfono para iniciar sesión
          </h1>
          <div className="mt-70">
            <a href="#" className="inline-flex items-center space-x-2 rounded-lg shadow-md p-4 bg-white hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Tengo un problema de seguridad</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
            <a href="#" className="block mt-4 text-blue-500 text-sm hover:underline">
              Necesito ayuda
            </a>
          </div>
        </div>

        {/* Contenedor de la derecha para el formulario */}
        <div className="w-[470px] bg-white rounded-lg border border-gray-200 mb-35">
          <form onSubmit={handleSubmit} className="w-full p-8 pt-10">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
                E-mail o teléfono
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-3">¡Login exitoso! Redirigiendo...</p>}

            <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-3 text-lg font-semibold mb-3 hover:bg-blue-600 transition-colors cursor-pointer">
              Continuar
            </button>

            <p className="text-center mb-4 w-full">
              <a 
                href="#" className="w-full py-4 text-blue-500 text-sm font-semibold rounded-md bg-transparent hover:bg-blue-50 transition-colors cursor-pointer block">
                Crear cuenta
              </a>
            </p>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-500">o</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <button className="w-full bg-white border border-gray-300 rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
              <FcGoogle size={20} />
              <span>Iniciar sesión con Google</span>
            </button>
          </form>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-500 text-xs p-7 flex justify-between items-center shadow-inner">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline text-blue-600">Cómo cuidamos tu privacidad</a>
          <span>Copyright © 1999-2025 MercadoLibre Colombia LTDA.</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Protegido por reCAPTCHA.</span>
          <a href="#" className="hover:underline text-black">Privacidad</a>
          <a href="#" className="hover:underline text-black">Condiciones</a>
        </div>
      </footer>
    </div>
  );
};

export default MercadolibreLogin;