import axios from "axios";

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axios.post("http://192.168.15.3:3333/auth/login", {
    email,
    password,
  })
  
  return response.data;
};
