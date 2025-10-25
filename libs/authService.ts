import { apiFetch } from "./singletonFetch";
import { LoginDTO } from "@/interfaces/login";
import { RegisterFormData } from "@/interfaces/register";

class AuthService {
  async login(body: LoginDTO) {
    return apiFetch('/login', 'POST', body);
  }

  async register(data: RegisterFormData) {
    return apiFetch('/register', 'POST', data);
  }
}

export const authService = new AuthService();