import { axiosInstance } from "@/shared/api/axiosInstance";

export const logout = async () => {
  await axiosInstance("/logout");
};
