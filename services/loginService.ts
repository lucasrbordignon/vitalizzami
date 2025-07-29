import axios from "axios";

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axios.post("http://192.168.15.11:3333/auth/login", {
    email,
    password,
  })
  
  return response.data;
};
