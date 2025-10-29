"use client";
import React, { useEffect } from "react";
import SelectField from "@/components/molecules/SelectField";
import ModalFrame from "@/components/molecules/ModalFrame";
import useLocation from "@/hooks/useLocation";

const DEPARTMENT_OPTIONS = [
  { label: "Caldas", value: "Caldas" },
  { label: "Antioquia", value: "Antioquia" },
];

const MUNICIPALITY_OPTIONS = [
  { label: "Manizales", value: "Manizales", dept: "Caldas" },
  { label: "Medellin", value: "Medellin", dept: "Antioquia" },
] as const;

export default function LocationSelectorModal() {
  const {
    isModalOpen,
    closeModal,
    tempDepartment,
    tempMunicipality,
    setTempDepartment,
    setTempMunicipality,
    acceptSelection,
    resetTemp,
  } = useLocation();

  useEffect(() => {
    if (isModalOpen) {
      resetTemp();
    }
  }, [isModalOpen]);

  const filteredMunicipalities = tempDepartment
    ? MUNICIPALITY_OPTIONS.filter((m) => m.dept === tempDepartment)
    : [];

  const canAccept = Boolean(tempDepartment && tempMunicipality);

  return (
    <ModalFrame
      title="Elige dónde recibir tus compras"
      subtitle="Podrás ver costos y tiempos de entrega precisos en todo lo que busques."
      isOpen={isModalOpen}
      onClose={closeModal}
    >
      <div className="flex items-end gap-5 flex-wrap">
        <SelectField
          label="Departamento"
          value={tempDepartment}
          onChange={(v) => {
            setTempDepartment(v as any);
            // Reset municipality when department changes
            setTempMunicipality("");
          }}
          options={DEPARTMENT_OPTIONS}
        />

        <SelectField
          label="Municipio, capital o localidad"
          value={tempMunicipality}
          onChange={(v) => setTempMunicipality(v as any)}
          options={filteredMunicipalities.map(({ label, value }) => ({ label, value }))}
          disabled={!tempDepartment}
        />

        <button
          className={`h-11 px-6 rounded-md transition-colors ${
            canAccept
              ? "bg-[#3483FA] text-white hover:bg-[#2968c8]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={acceptSelection}
          disabled={!canAccept}
        >
          Aceptar
        </button>
      </div>
    </ModalFrame>
  );
}


