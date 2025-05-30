"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { register } from "../api/register";

export const RegisterForm = () => {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      router.push("/");
    },
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate({ email, password, user_name: userName });
  };
  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4 w-[300px]"}>
      <Input
        placeholder={"Как вас зовут?"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"password"}
        placeholder={"Придумайте пароль"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={isPending}>
        {isPending ? "Регистрируем..." : "Зарегистрироваться"}
      </Button>
      {error && <p className={"text-red-500"}>Ошибка регистрации</p>}
    </form>
  );
};
