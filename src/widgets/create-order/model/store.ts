import { create } from "zustand";

type AddressData = {
  city: string;
  street: string;
};

type UserData = {
  name: string;
  surname: string;
  phone: string;
};

type PaymentData = {
  number: string;
  date: string;
  cvv: string;
};

type Steps = "address" | "user" | "payment" | "summary";

type CreateOrderState = {
  step: Steps;
  address?: AddressData;
  user?: UserData;
  payment?: PaymentData;
  setStep: (step: Steps) => void;
  setAddress: (data: AddressData) => void;
  setUser: (data: UserData) => void;
  setPayment: (data: PaymentData) => void;
  reset: () => void;
};

export const useCreateOrderStore = create<CreateOrderState>((set) => ({
  step: "address",
  address: undefined,
  user: undefined,
  payment: undefined,
  setStep: (step) => set({ step }),
  setAddress: (data) => set({ address: data, step: "user" }),
  setUser: (data) => set({ user: data, step: "payment" }),
  setPayment: (data) => set({ payment: data, step: "summary" }),
  reset: () => set({ step: "address", address: undefined, user: undefined }),
}));
