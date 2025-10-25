// components/organisms/RegisterForm.tsx
"use client";

import React from "react";
import { Controller } from "react-hook-form";
import useRegisterForm from "@/hooks/useRegisterForm";
import { useRouter } from "next/navigation";

import Input from "@/components/atoms/InputAuth";
import Checkbox from "@/components/atoms/Checkbox";
import Button from "@/components/atoms/ButtonAuth";
import ErrorAlert from "@/components/atoms/ErrorAlert";
import FormFooter from "@/components/molecules/FormFooter";

export default function RegisterForm() {
  const router = useRouter();

  const { control, handleSubmit, submit, formState, serverError } = useRegisterForm({
    onSuccess: () => {
      router.push("/login");
    },
  });

  const { errors, isSubmitting } = formState;

  return (
    <div className="p-4 w-full flex items-center justify-center">
      <div className="bg-white rounded-sm shadow-sm w-full max-w-md">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-light text-center text-gray-800">Crea tu cuenta y compra con envíos gratis</h1>
        </div>

        <form onSubmit={handleSubmit(submit)} className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col gap-4">
          {/* Errores generales */}
          {(serverError || (errors && Object.keys(errors).length > 0)) && (
            <ErrorAlert>{serverError ?? "Por favor revisa los campos del formulario."}</ErrorAlert>
          )}

          {/* Email */}
          <div className="mb-4">
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  label="E-mail"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  placeholder="ejemplo@correo.com"
                  type="email"
                  name={field.name}
                />
              )}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Teléfono */}
          <div className="mb-4">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  label="Teléfono"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  placeholder="+57"
                  type="tel"
                  name={field.name}
                />
              )}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Nombre */}
          <div className="mb-4">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input label="Nombre" value={field.value ?? ""} onChange={field.onChange} onBlur={field.onBlur} type="text" name={field.name} />
              )}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Contraseña */}
          <div className="mb-6">
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  label="Contraseña"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  type="password"
                  name={field.name}
                />
              )}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* acceptSMS */}
          <div className="mb-4 flex items-start">
            <Controller
              control={control}
              name="acceptSMS"
              render={({ field }) => (
                <Checkbox id="acceptSMS" checked={!!field.value} onChange={(e) => field.onChange(e.target.checked)} label="Acepto que me contacten por SMS y WhatsApp." />
              )}
            />
          </div>

          {/* acceptTerms */}
          <div className="mb-6 flex items-start">
            <Controller
              control={control}
              name="acceptTerms"
              render={({ field }) => (
                <Checkbox
                  id="acceptTerms"
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  label={
                    'Al "Continuar", autorizo el uso de mis datos de acuerdo a la Declaración de privacidad y acepto los Términos y condiciones y la Autorización de tratamiento de datos.'
                  }
                />
              )}
            />
            {errors.acceptTerms && <p className="text-red-500 text-sm mt-1">{(errors.acceptTerms as any).message ?? "Debes aceptar los términos."}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Procesando..." : "Continuar"}
          </Button>
        </form>

        <FormFooter />
      </div>
    </div>
  );
}
