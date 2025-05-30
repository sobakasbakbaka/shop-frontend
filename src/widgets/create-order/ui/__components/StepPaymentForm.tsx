import { FormEvent } from "react";
import { Input } from "@/shared/ui/input";
import { useCreateOrderStore } from "../../model/store";
import { Button } from "@/shared/ui/button";

export const StepPaymentForm = () => {
  const setPayment = useCreateOrderStore((s) => s.setPayment);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const number = (form.elements.namedItem("number") as HTMLInputElement)
      .value;
    const cvv = (form.elements.namedItem("cvv") as HTMLInputElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;

    setPayment({ number, cvv, date });
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4 w-[300px]"}>
      <Input name={"number"} placeholder={"Номер карты"} required />
      <Input name={"cvv"} placeholder={"cvv"} required />
      <Input name={"date"} placeholder={"date"} required />
      <Button type="submit">Далее</Button>
    </form>
  );
};
