// store/deliveryStore.ts
import { create } from 'zustand';

interface DeliveryState {
  selectedOption: 'domicilio' | 'punto';
  deliveryAddress: string;
  pickupLocation: string;
  pickupAddress: string;
  pickupSchedule: string;
  pickupDistance: string;
  setDeliveryOption: (option: 'domicilio' | 'punto') => void;
  setDeliveryAddress: (address: string) => void;
  setPickupInfo: (location: string, address: string, schedule: string, distance: string) => void;
}

export const useDeliveryStore = create<DeliveryState>((set) => ({
  selectedOption: 'domicilio',
  deliveryAddress: 'Carrera 11 #55a-12 casa - Villa Hermosa, Caldas',
  pickupLocation: 'Agencia Mercado Libre - Tennis manizalesss',
  pickupAddress: 'Calle 9 #09-22 - Chipre',
  pickupSchedule: 'Lu a Sá: 10 a 19 hs.',
  pickupDistance: 'A 400 m de tu domicilio',
  
  setDeliveryOption: (option) => set({ selectedOption: option }),
  
  setDeliveryAddress: (address) => set({ deliveryAddress: address }),
  
  setPickupInfo: (location, address, schedule, distance) => 
    set({ 
      pickupLocation: location, 
      pickupAddress: address, 
      pickupSchedule: schedule, 
      pickupDistance: distance 
    }),
}));
