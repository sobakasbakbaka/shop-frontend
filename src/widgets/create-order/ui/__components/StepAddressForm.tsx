import { Input } from "@/shared/ui/input";
import { useCreateOrderStore } from "../../model/store";
import { Button } from "@/shared/ui/button";
import { FormEvent } from "react";

export const StepAddressForm = () => {
  const setAddress = useCreateOrderStore((s) => s.setAddress);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const city = (form.elements.namedItem("city") as HTMLInputElement).value;
    const street = (form.elements.namedItem("street") as HTMLInputElement)
      .value;

    setAddress({ city, street });
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4 w-[300px]"}>
      <Input name={"city"} placeholder={"Город"} required />
      <Input name={"street"} placeholder={"Улица"} required />
      <Button type="submit">Далее</Button>
    </form>
  );
};
