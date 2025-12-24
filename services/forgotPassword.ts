import axios from "axios";

export const forgotPassword = async ({
  email,
}: {
  email: string;
}) => {
  const response = await axios.post("http://192.168.15.3:3333/auth/forgot-password", {
    email,
  })
  
  return response.data;
};
