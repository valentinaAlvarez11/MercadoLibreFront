// hooks/useLoginForm.ts
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "@/libs/authService";
import type { LoginDTO } from "@/interfaces/login";
import { useAuthStore } from "@/store/authStore";

const loginSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export default function useLoginForm({ onSuccess }: { onSuccess?: () => void } = {}) {
  const [serverError, setServerError] = useState<string | null>(null);
  const { login } = useAuthStore();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const submit = async (data: LoginFormData) => {
    try {
      setServerError(null);

      const payload: LoginDTO = { 
        email: data.email, 
        contraseña: data.password 
      };

      const response = await authService.login(payload);
      
      // Guardar en el store
      login(response.usuario);

      onSuccess?.();
      form.reset();
    } catch (err: any) {
      setServerError(err?.message ?? "Error en el login");
    }
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    formState: form.formState,
    reset: form.reset,
    submit,
    serverError,
  };
}
