"use client";

import { useMe } from "@/features/auth/hooks/useMe";
import Link from "next/link";

export default function ProfilePage() {
  const { data, isLoading } = useMe();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <div>
        <p>Данные: </p>
        <p>Имя: {data.user_name}</p>
        <p>Email: {data.email}</p>
      </div>
      <div>
        <Link href={"/profile/orders"}>История заказов</Link>
      </div>
    </div>
  );
}
