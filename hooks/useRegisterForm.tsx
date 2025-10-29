// hooks/useRegisterForm.ts
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RegisterFormData } from "@/interfaces/register";
import { authService } from "@/libs/authService";
import { useAuthStore } from "@/store/authStore";
import { registerSchema } from "@/schemas/register";

interface UseRegisterFormProps {
  onSuccess?: (data: RegisterFormData) => void;
}

export default function useRegisterForm({ onSuccess }: UseRegisterFormProps = {}) {
  const [serverError, setServerError] = useState<string | null>(null);
  const { login } = useAuthStore();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      password: "",
      acceptSMS: false,
      acceptTerms: false,
    },
    mode: "onSubmit",
  });

  const submit = async (data: RegisterFormData) => {
    try {
      setServerError(null);
      const response = await authService.register(data);
      
      // Guardar en el store con los roles
      if (response.usuario) {
        login(response.usuario);
      }
      
      onSuccess?.(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error en el registro";
      setServerError(message);
    }
  };

  return {
    register: form.register,
    control: form.control,
    handleSubmit: form.handleSubmit,
    formState: form.formState,
    reset: form.reset,
    setError: form.setError,
    submit,
    serverError,
  };
}
