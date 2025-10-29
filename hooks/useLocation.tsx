"use client";
import { useContext, useState } from "react";
import { LocationContext, Department, Municipality } from "@/context/LocationContext";

// Custom hook that uses both useContext and internal useState to manage
// temporary selection inside the modal before committing to global context
export default function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used within LocationProvider");

  const [tempDepartment, setTempDepartment] = useState<Department>(ctx.department);
  const [tempMunicipality, setTempMunicipality] = useState<Municipality>(ctx.municipality);

  const resetTemp = () => {
    setTempDepartment(ctx.department);
    setTempMunicipality(ctx.municipality);
  };

  const acceptSelection = () => {
    ctx.setDepartment(tempDepartment);
    ctx.setMunicipality(tempMunicipality);
    ctx.closeModal();
  };

  return {
    // global
    department: ctx.department,
    municipality: ctx.municipality,
    isModalOpen: ctx.isModalOpen,
    openModal: ctx.openModal,
    closeModal: ctx.closeModal,

    // temp (modal)
    tempDepartment,
    tempMunicipality,
    setTempDepartment,
    setTempMunicipality,
    resetTemp,
    acceptSelection,
  };
}


