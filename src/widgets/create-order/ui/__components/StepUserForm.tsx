import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useCreateOrderStore } from "../../model/store";
import { FormEvent } from "react";

export const StepUserForm = () => {
  const { setUser } = useCreateOrderStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const surname = (form.elements.namedItem("surname") as HTMLInputElement)
      .value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    const userData = { name, surname, phone };
    setUser(userData);
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4 w-[300px]"}>
      <Input name={"name"} placeholder={"Имя"} required />
      <Input name={"surname"} placeholder={"Фамилия"} required />
      <Input name={"phone"} placeholder={"Телефон"} required />
      <Button type="submit">Далее</Button>
    </form>
  );
};
