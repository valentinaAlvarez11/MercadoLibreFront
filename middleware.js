import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'; // ⚠️ Necesitas instalar 'jsonwebtoken' en el frontend
                                // npm install jsonwebtoken

// 🚨 IMPORTANTE: Usa la misma clave secreta que tu backend
const SECRET_KEY = "tu_clave_secreta_aqui"; 
const PROTECTED_ROUTES = ['/cart', '/checkout'];
const LOGIN_PAGE = '/login'; 

function isAuthenticated(request) {
  // ⭐️ La cookie se llama 'session-token' (o 'token' si no cambias el backend)
  const sessionToken = request.cookies.get('session-token'); 

  if (!sessionToken) {
    return false;
  }
  
  try {
    // Verificar si el token es válido y no ha expirado
    jwt.verify(sessionToken.value, SECRET_KEY);
    return true; // Token válido
  } catch (error) {
    // El token es inválido (expirado, modificado, etc.)
    return false;
  }
}


export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = PROTECTED_ROUTES.some(route => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !isAuthenticated(request)) {
    // 1. Si la ruta es protegida Y el usuario NO está autenticado
    const url = new URL(LOGIN_PAGE, request.url);
    url.searchParams.set('redirect', pathname); 
    
    // 2. Redirigir al login
    return NextResponse.redirect(url);
  }
  
  // Permitir el acceso
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/cart/:path*', 
    '/checkout/:path*',
  ],
};