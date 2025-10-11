import { NextResponse } from 'next/server';

// Rutas que requieren que el usuario esté autenticado.
const PROTECTED_ROUTES = ['/cart', '/checkout'];

// Asumimos que tu página de login se encuentra en esta ruta.
const LOGIN_PAGE = '/login'; 

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. OBTENER Y VERIFICAR EL TOKEN DE SESIÓN
  // Esto simula la comprobación de si el navegador tiene una cookie de sesión válida.
  const sessionToken = request.cookies.get('session-token'); 
  const isAuthenticated = !!sessionToken; // Devuelve true si la cookie existe, false si no.

  // 2. COMPROBAR SI LA RUTA ACTUAL ES PROTEGIDA
  const isProtectedRoute = PROTECTED_ROUTES.some(route => 
    pathname.startsWith(route)
  );

  // 3. LÓGICA DE REDIRECCIÓN
  if (isProtectedRoute && !isAuthenticated) {
    // Si la ruta es protegida Y el usuario NO está logueado:
    
    // a) Construir la URL de redirección al login.
    const url = new URL(LOGIN_PAGE, request.url);
    
    // b) Añadir el parámetro 'redirect' para que después del login, vuelva al carrito.
    url.searchParams.set('redirect', pathname); 
    
    // c) Redirigir la solicitud al login.
    return NextResponse.redirect(url);
  }
  
  // Si el usuario está autenticado O si la ruta es pública, permitir el acceso.
  return NextResponse.next();
}

// 4. CONFIGURACIÓN DEL MATCHER
// Esto asegura que el middleware SOLO se ejecute para las rutas relevantes, optimizando el rendimiento.
export const config = {
  matcher: [
    // La expresión regular coincide con /cart y /checkout (y cualquier subruta)
    '/cart/:path*', 
    '/checkout/:path*',
  ],
};