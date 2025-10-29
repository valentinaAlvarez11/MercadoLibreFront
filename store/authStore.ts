// store/authStore.ts
import { create } from 'zustand';

// Opcional: Interfaz de usuario si se decodifica el token
export interface AuthUser {
  id: number;
  email: string;
  nombre: string; 
  // Podrías añadir más datos aquí si los incluyes en el payload de JWT
}

interface AuthState {
  isLoggedIn: boolean;
  user: AuthUser | null;
  // Estado para manejar la hidratación si usas persist (aunque no es necesario si solo usas cookies)
  // _hasCheckedAuth: boolean; 
  
  // Acciones
  login: (userData: AuthUser) => void;
  logout: () => void;
  checkAuthStatus: () => Promise<void>; // Para verificar el token al cargar la app
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  // _hasCheckedAuth: false,

  login: (userData) => set({ isLoggedIn: true, user: userData }),
  logout: () => {
    // 1. Limpiar el estado local
    set({ isLoggedIn: false, user: null });
    
    // 2. Llamar a la API para eliminar la cookie del servidor
    fetch('http://localhost:3000/logout', { method: 'POST', credentials: 'include' })
      .catch(error => console.error("Error al cerrar sesión en el BE:", error));
  },
  
  checkAuthStatus: async () => {
    // Esta función intentará obtener los datos del usuario usando el token guardado en la cookie
    // Es una API que crearemos en el BE para obtener datos del usuario a partir del token.
    try {
      const res = await fetch('http://localhost:3000/user-data', {
        method: 'GET',
        credentials: 'include', // Importante para enviar la cookie
      });
      
      if (res.ok) {
        const data = await res.json();
        set({ 
            isLoggedIn: true, 
            user: { id: data.id, email: data.email, nombre: data.nombre } 
        });
      } else {
        // Si el token es inválido o expiró, el BE devuelve 401/403
        set({ isLoggedIn: false, user: null });
      }
    } catch (error) {
      console.error("Fallo al verificar la autenticación:", error);
      set({ isLoggedIn: false, user: null });
    } 
    // finally {
    //     set({ _hasCheckedAuth: true });
    // }
  },
}));