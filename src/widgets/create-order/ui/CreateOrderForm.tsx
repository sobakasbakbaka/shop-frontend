"use client";

import { useCreateOrderStore } from "../model/store";
import { StepAddressForm } from "./__components/StepAddressForm";
import { StepSummary } from "./__components/StepSummary";
import { StepUserForm } from "./__components/StepUserForm";

export const CreateOrderForm = () => {
  const step = useCreateOrderStore((s) => s.step);

  return (
    <main className={"flex justify-center items-center h-screen"}>
      {step === "address" && <StepAddressForm />}
      {step === "user" && <StepUserForm />}
      {step === "summary" && <StepSummary />}
    </main>
  );
};
