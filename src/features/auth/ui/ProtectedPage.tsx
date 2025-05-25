import { ReactNode } from "react";
import { useMe } from "../hooks/useMe";
import { useRouter } from "next/navigation";

type ProtectedPageProps = {
  children: ReactNode;
};

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { data, isLoading } = useMe();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (!data) {
    router.push("/login");
    return;
  }

  return <>{children}</>;
};
