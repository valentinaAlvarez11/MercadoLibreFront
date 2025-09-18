import Image from "next/image";
import mercadolibreLogo from "@/app/assets/mercadolibre.png";
import enviog from "@/app/assets/enviog.png";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function HeaderComponent() {
  return (
    <header className="bg-[#ffe600] w-full">
      {/* Primera fila: Logo, Buscador, Envío Gratis, Usuario */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 pt-2 pb-1">
        {/* Logo y ubicación */}
        <div className="flex flex-col items-start min-w-[200px]">
          <div className="flex items-center gap-2">
            <Image src={mercadolibreLogo} alt="mercado libre" width={120} height={40} />
          </div>
          <div className="flex items-center mt-1">
            <MdLocationOn className="text-2xl text-black mr-1" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-700">Ingresa tu</span>
              <span className="text-base text-black font-medium">ubicación</span>
            </div>
          </div>
        </div>
        {/* Buscador */}
        <div className="w-full flex justify-center">
          <div className="flex w-full max-w-[900px]">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="flex-1 px-4 py-3 rounded-l-md text-lg text-gray-700 bg-white border-none outline-none shadow-sm"
            />
            <button className="bg-white px-4 flex items-center justify-center rounded-r-md border-l border-gray-200">
              <FaSearch className="text-gray-400 text-xl" />
            </button>
          </div>
        </div>
        {/* Envío Gratis y usuario */}
        <div className="flex items-center gap-8 min-w-[400px] justify-end">
          <a href="https://www.mercadolibre.com.co/l/descarga-la-app#DEAL_ID=MCO23116&S=MKT&V=1&T=BME&L=MKTG_UNKAUDFSNBAPPEXCLUSIVE&me.audience=unknown&me.bu=3&me.bu_line=26&me.component_id=banner_menu_web_ml&me.content_id=UNK_FREE_SHIPPING_NB&me.flow=-1&me.logic=user_journey&me.position=0" className="exhibitor__picture flex items-center" target="_blank" rel="noopener noreferrer" style={{boxShadow: 'none', border: 'none', padding: 0, background: 'none'}}>
            <Image src={enviog} alt="ENVIO GRATIS PRIMERA COMPRA" width={680} height={78} style={{display: 'block', maxWidth: '100%', height: 'auto'}} />
          </a>
          <div className="flex items-center gap-6">

            <span className="text-black font-medium cursor-pointer">Ingresa</span>
            <span className="text-black font-medium cursor-pointer">Mis compras</span>
            <FaShoppingCart className="text-2xl text-black cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Segunda fila: Menú */}
      <div className="w-full flex justify-center bg-[#ffe600]" style={{minHeight: 36}}>
        <div className="flex flex-row w-full max-w-[900px]">
          <span className="text-base text-black font-medium mr-6 cursor-pointer flex items-center gap-1">Categorías <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <span className="text-base text-black font-medium mr-4 cursor-pointer">Ofertas</span>
          <span className="text-base text-black font-medium mr-4 cursor-pointer">Cupones</span>
          <span className="text-base text-black font-medium mr-4 cursor-pointer">Supermercado <span className="bg-blue-600 text-white text-[10px] px-2 py-[1px] rounded ml-1 align-middle">NUEVO</span></span>
          <span className="text-base text-black font-medium mr-4 cursor-pointer">Moda</span>
          <span className="text-base text-black font-medium mr-4 cursor-pointer">Vender</span>
          <span className="text-base text-black font-medium mr-4 cursor-pointer">Ayuda / PQR</span>
        </div>
      </div>
    </header>
  );
}
