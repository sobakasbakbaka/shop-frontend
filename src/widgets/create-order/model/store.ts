import { create } from "zustand";

export type AddressData = {
  city: string;
  street: string;
};

export type UserData = {
  name: string;
  surname: string;
  phone: string;
};

type Steps = "address" | "user" | "summary";

type CreateOrderState = {
  step: Steps;
  address?: AddressData;
  user?: UserData;
  setStep: (step: Steps) => void;
  setAddress: (data: AddressData) => void;
  setUser: (data: UserData) => void;
  reset: () => void;
};

export const useCreateOrderStore = create<CreateOrderState>((set) => ({
  step: "address",
  address: undefined,
  user: undefined,
  setStep: (step) => set({ step }),
  setAddress: (data) => set({ address: data, step: "user" }),
  setUser: (data) => set({ user: data, step: "summary" }),
  reset: () => set({ step: "address", address: undefined, user: undefined }),
}));
