"use client";
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBell } from 'react-icons/fa';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import Avatar from '@/components/atoms/Avatar';
import MenuItemWithArrow from '@/components/molecules/MenuItemWithArrow';
import UserDropdown from '@/components/molecules/UserDropdown';
import FavoritosDropdown from '@/components/molecules/FavoritosDropdown';

export default function HeaderComponent() {
  const { user, isLoggedIn } = useAuthStore();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showFavoritos, setShowFavoritos] = useState(false);

  return (
    <header className="w-full font-sans bg-[#ffe600]">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Primera fila: Logo | Buscador | Banner */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" 
                alt="mercado libre" 
                width={140} 
                height={50} 
              />
            </Link>
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

          {/* Banner promocional */}
          <div>
            {isLoggedIn && user ? (
              /* Banner meli+ para usuarios logueados */
              <div className="bg-gray-700 text-white px-3 py-1.5 flex items-center gap-0 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">meli+</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="text-white text-xs font-semibold">NUEVO PROGRAMA, NUEVOS BENEFICIOS PARA TI</span>
                </div>
              </div>
            ) : (
              /* Banner de envío gratis para usuarios no logueados */
              <div className="flex rounded-full overflow-hidden">
                <div className="bg-[#1A237E] text-white px-4 py-2 flex items-center">
                  <span className="font-bold text-sm">ENVÍO GRATIS</span>
                </div>
                <div className="bg-white text-[#1A237E] px-4 py-2 flex flex-col justify-center">
                  <div className="font-bold text-xs leading-tight">EN TU PRIMERA COMPRA</div>
                  <div className="text-xs leading-tight">EXCLUSIVO EN APP</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Segunda fila: Ubicación | Navegación | Info usuario */}
        <div className="flex items-center justify-between pb-4">
          {/* Ubicación */}
          <div className="flex items-center">
            <MdLocationOn className="text-black text-xl mr-2" />
            <span className="text-[#333333] text-sm">Enviar a Manizales</span>
          </div>

          {/* Links de navegación */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[#333333] text-sm font-normal">Categorías</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Link href="/ofertas" className="text-[#333333] text-sm font-normal hover:text-blue-600 transition-colors">Ofertas</Link>
            {isLoggedIn && user ? (
              <Link href="/cupones" className="text-[#333333] text-sm font-normal hover:text-blue-600 transition-colors">Cupones</Link>
            ) : (
              <Link href="/login" className="text-[#333333] text-sm font-normal hover:text-blue-600 transition-colors">Cupones</Link>
            )}
            <Link href="/supermercado" className="flex flex-col items-center cursor-pointer relative hover:text-blue-600 transition-colors">
              <div className="bg-[#3483FA] text-white text-xs px-2 py-0.5 rounded-full mb-1">NUEVO</div>
              <span className="text-[#333333] text-sm font-normal">Supermercado</span>
            </Link>
            <span className="text-[#333333] text-sm font-normal cursor-pointer">Moda</span>
            {isLoggedIn && user ? (
              <Link href="/vender" className="text-[#333333] text-sm font-normal hover:text-blue-600 transition-colors">Vender</Link>
            ) : (
              <Link href="/login" className="text-[#333333] text-sm font-normal hover:text-blue-600 transition-colors">Vender</Link>
            )}
            <span className="text-[#333333] text-sm font-normal cursor-pointer">Ayuda / PQR</span>
          </div>

          {/* Info usuario */}
          <div className="flex items-center gap-6">
            {isLoggedIn && user ? (
              <>
                <div className="flex items-center gap-2 relative">
                  <Avatar name={user.nombre} size="md" />
                  <MenuItemWithArrow 
                    text={user.nombre} 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  />
                  <UserDropdown isOpen={showUserMenu} onClose={() => setShowUserMenu(false)} />
                </div>
                
                <a href="#" className="text-[#333333] text-sm hover:text-blue-600 transition-colors">Mis compras</a>
                
                <div className="relative">
                  <button 
                    onClick={() => setShowFavoritos(!showFavoritos)}
                    className="text-[#333333] text-sm hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    Favoritos
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L4 4L7 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <FavoritosDropdown isOpen={showFavoritos} onClose={() => setShowFavoritos(false)} />
                </div>
                
                <button className="text-[#333333] hover:text-blue-600 transition-colors">
                  <FaBell className="text-xl" />
                </button>
                
                <Link href="/cart" className="flex items-center text-[#333333] hover:text-blue-600 transition-colors">
                  <FaShoppingCart className="text-xl cursor-pointer" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/register" className="text-[#333333] text-sm font-normal cursor-pointer hover:text-blue-600 transition-colors">
                  Crea tu cuenta
                </Link>
                <Link href="/login" className="text-[#333333] text-sm font-normal cursor-pointer hover:text-blue-600 transition-colors">
                  Ingresa
                </Link>
                <a href="#" className="text-[#333333] text-sm font-normal cursor-pointer hover:text-blue-600 transition-colors">Mis compras</a>
                <Link href="/cart" className="flex items-center text-[#333333] hover:text-blue-600 transition-colors">
                  <FaShoppingCart className="text-xl cursor-pointer" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
