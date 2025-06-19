import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

interface Career {
  email: string;
  message: string;
  name: string;
  phone: number;
}
export const careerJob = async (data: Career) => {
  try {
    const res = await axiosInstance.post("/career/apply", {
      data,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
