import { axiosInstance } from "@/shared/api/axiosInstance";

type LoginDto = {
  email: string;
  password: string;
};

export const login = async (
  dto: LoginDto
): Promise<{
  message: string;
  token: string;
}> => {
  const { data } = await axiosInstance.post("/login", dto);
  return data;
};
