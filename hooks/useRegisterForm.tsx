// hooks/useRegisterForm.ts
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RegisterFormData } from "@/interfaces/register";
import { authService } from "@/libs/authService"; // asumes que existe

// Schema (igual que antes)
const registerSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  acceptSMS: z.boolean(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
});

interface UseRegisterFormProps {
  onSuccess?: (data: RegisterFormData) => void;
}

export default function useRegisterForm({ onSuccess }: UseRegisterFormProps = {}) {
  const [serverError, setServerError] = useState<string | null>(null);

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
      await authService.register(data);
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
