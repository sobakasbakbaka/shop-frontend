"use client";

import { useCreateOrderStore } from "../model/store";
import { StepAddressForm } from "./__components/StepAddressForm";
import { StepPaymentForm } from "./__components/StepPaymentForm";
import { StepSummary } from "./__components/StepSummary";
import { StepUserForm } from "./__components/StepUserForm";

export const CreateOrderForm = () => {
  const step = useCreateOrderStore((s) => s.step);

  console.log(step);

  return (
    <main className={"flex justify-center items-center h-screen"}>
      {step === "address" && <StepAddressForm />}
      {step === "user" && <StepUserForm />}
      {step === "payment" && <StepPaymentForm />}
      {step === "summary" && <StepSummary />}
    </main>
  );
};
