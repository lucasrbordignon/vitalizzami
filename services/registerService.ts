import axios from "axios";

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post("http://192.168.15.11:3333/auth/register", {
    name,
    email,
    password,
  });

  return response.data;
};
