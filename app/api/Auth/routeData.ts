import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

interface CredentialInterfaceSignin {
  email: string;
  password: string;
}
interface CredentialInterfaceSignup {
  email: string;
  password: string;
  userName: string;
}
export async function signin(credential: CredentialInterfaceSignin) {
  const { email, password } = credential;
  const data = await axiosInstance.post("/auth/login", { email, password });
  // console.log(data.data, "data are");
  return data.data.userData;
}

export async function signup(credential: CredentialInterfaceSignup) {
  const { userName, email, password } = credential;
  const data = await axiosInstance.post("/auth/register", {
    userName,
    email,
    password,
  });
  return data;
}

export async function logout() {
  const data = await axiosInstance.post("/logout");
  return data;
}
