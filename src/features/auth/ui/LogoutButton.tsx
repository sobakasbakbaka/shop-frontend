"use client";

import { Button } from "@/shared/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../api/logout";

export const LogoutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["me"], null);
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <Button onClick={handleClick} className={"px-4"}>
      Выйти
    </Button>
  );
};
