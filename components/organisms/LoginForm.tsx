// components/organisms/LoginForm.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import useLoginForm from "@/hooks/useLoginForm";
import Input from "@/components/atoms/InputAuth";
import Button from "@/components/atoms/ButtonAuth";

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState, submit, serverError } = useLoginForm({
    onSuccess: () => router.push("/"), // redirige al home o donde quieras
  });

  const { errors, isSubmitting } = formState;

  return (
    <div className="w-[470px] bg-white rounded-lg border border-gray-200 mb-35">
      <form onSubmit={handleSubmit(submit)} className="w-full p-8 pt-10">
        <div className="mb-4">
          <Input
            id="email"
            label="E-mail o teléfono"
            type="text"
            
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <Input
            id="password"
            label="Contraseña"
            type="password"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {serverError && <p className="text-red-500 text-sm mb-3">{serverError}</p>}

        <Button type="submit" variant="primary" className="mb-3" disabled={isSubmitting}>
          Continuar
        </Button>

        <p className="text-center mb-4 w-full">
          <Link href="/register" className="w-full py-4 text-blue-500 text-sm font-semibold rounded-md bg-transparent hover:bg-blue-50 transition-colors cursor-pointer block">
            Crear cuenta
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">o</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <Button variant="outline" className="flex items-center justify-center space-x-2" type="button">
          <FcGoogle size={20} />
          <span>Iniciar sesión con Google</span>
        </Button>
      </form>
    </div>
  );
}
