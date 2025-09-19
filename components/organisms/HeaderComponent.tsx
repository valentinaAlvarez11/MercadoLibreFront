import Image from "next/image";
import mercadolibreLogo from "@/app/assets/mercadolibre.png";
import enviog from "@/app/assets/enviog.png";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function HeaderComponent() {
  return (
    <header className="bg-[#ffe600] w-full font-sans">
      {/* Primera fila: Logo, Buscador, Banners promocionales, Usuario */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 py-4">
        {/* Logo y ubicación */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" alt="mercado libre" width={140} height={50} />
          </div>
          {/* Ubicación */}
          <div className="flex items-center mt-2">
            <MdLocationOn className="text-black text-xl mr-2" />
            <div className="flex flex-col">
              <span className="text-black text-sm leading-tight">Ingresa tu</span>
              <span className="text-black text-base font-bold leading-tight">ubicación</span>
            </div>
          </div>
        </div>

        {/* Buscador */}
        <div className="flex-1 max-w-[600px] mx-8">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="flex-1 px-4 py-3 text-gray-500 bg-white border border-gray-300 outline-none text-base h-12 rounded-l-sm"
            />
            <button className="bg-white px-4 flex items-center justify-center border border-gray-300 border-l-0 h-12 rounded-r-sm">
              <FaSearch className="text-gray-400 text-lg" />
            </button>
          </div>
        </div>

        {/* Banner promocional y usuario */}
        <div className="flex flex-col items-end gap-2">
          {/* Banner promocional único */}
          <div className="flex rounded-full overflow-hidden">
            {/* Parte izquierda azul */}
            <div className="bg-[#1A237E] text-white px-4 py-2 flex items-center">
              <span className="font-bold text-sm">ENVÍO GRATIS</span>
            </div>
            {/* Parte derecha blanca */}
            <div className="bg-white text-[#1A237E] px-4 py-2 flex flex-col justify-center">
              <div className="font-bold text-xs leading-tight">EN TU PRIMERA COMPRA</div>
              <div className="text-xs leading-tight">EXCLUSIVO EN APP</div>
            </div>
          </div>

          {/* Account Links */}
          <div className="flex items-center gap-6">
            <a href="http://localhost:3001/register" className="text-[#333333] text-sm font-normal cursor-pointer">Crea tu cuenta</a>
            <a href="/login" className="text-[#333333] text-sm font-normal cursor-pointer">Ingresa</a>
            <a href="#" className="text-[#333333] text-sm font-normal cursor-pointer">Mis compras</a>
            <FaShoppingCart className="text-[#333333] text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Menú de navegación alineado con el inicio de la barra de búsqueda */}
      <div className="max-w-[600px] mx-auto px-8 pb-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[#333333] text-sm font-normal">Categorías</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#333333] text-sm font-normal cursor-pointer">Ofertas</span>
          <span className="text-[#333333] text-sm font-normal cursor-pointer">Cupones</span>
          <div className="flex flex-col items-center cursor-pointer relative">
            <div className="bg-[#3483FA] text-white text-xs px-2 py-0.5 rounded-full mb-1">NUEVO</div>
            <span className="text-[#333333] text-sm font-normal">Supermercado</span>
          </div>
          <span className="text-[#333333] text-sm font-normal cursor-pointer">Moda</span>
          <span className="text-[#333333] text-sm font-normal cursor-pointer">Vender</span>
          <span className="text-[#333333] text-sm font-normal cursor-pointer">Ayuda / PQR</span>
        </div>
      </div>
    </header>
  );
}
