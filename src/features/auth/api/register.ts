import { axiosInstance } from "@/shared/api/axiosInstance";

type RegisterDto = {
  email: string;
  password: string;
};

export const register = async (
  dto: RegisterDto
): Promise<{
  message: string;
  token: string;
}> => {
  const { data } = await axiosInstance.post("/register", dto);
  return data;
};
