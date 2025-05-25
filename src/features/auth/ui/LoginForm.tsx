"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/login";
import { useRouter } from "next/navigation";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export const LoginForm = () => {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      router.push("/");
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4 w-[300px]"}>
      <Input
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span className={"text-xs"}>
        <Link href={"/register"} className={"underline"}>
          Зарегистрируйтесь
        </Link>{" "}
        если у вас нет аккаунта
      </span>
      <Button disabled={isPending}>{isPending ? "Входим..." : "Войти"}</Button>
      {error && <p className={"text-red-500"}>Ошибка авторизации</p>}
    </form>
  );
};
