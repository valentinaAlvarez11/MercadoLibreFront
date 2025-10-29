"use client";
import React, { createContext, useCallback, useMemo, useState } from "react";

export type Department = "" | "Caldas" | "Antioquia";
export type Municipality = "" | "Manizales" | "Medellin";

type LocationContextValue = {
  department: Department;
  municipality: Municipality;
  isModalOpen: boolean;
  setDepartment: (d: Department) => void;
  setMunicipality: (m: Municipality) => void;
  openModal: () => void;
  closeModal: () => void;
  resetLocation: () => void;
};

export const LocationContext = createContext<LocationContextValue | undefined>(
  undefined
);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [department, setDepartment] = useState<Department>("");
  const [municipality, setMunicipality] = useState<Municipality>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const resetLocation = useCallback(() => {
    setDepartment("");
    setMunicipality("");
  }, []);

  const value = useMemo(
    () => ({
      department,
      municipality,
      isModalOpen,
      setDepartment,
      setMunicipality,
      openModal,
      closeModal,
      resetLocation,
    }),
    [department, municipality, isModalOpen, openModal, closeModal, resetLocation]
  );

  return (
    <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
  );
}


