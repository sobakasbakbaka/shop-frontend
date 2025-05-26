"use client";

import { useMe } from "@/features/auth/hooks/useMe";
import { LogoutButton } from "@/features/auth/ui/LogoutButton";
import Link from "next/link";

export const Header = () => {
  const { data } = useMe();

  return (
    <header className={"p-4 flex justify-between items-center border-b"}>
      <Link href="/">Main</Link>
      <div className={"flex gap-4 items-center"}>
        {data ? (
          <>
            <Link href="/cart">Корзина</Link>
            <Link href="/profile">
              <span>{data.user_name}</span>
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login">Авторизация</Link>
            <Link href="/register">Регистрация</Link>
          </>
        )}
      </div>
    </header>
  );
};
