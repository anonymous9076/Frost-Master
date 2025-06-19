import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

interface Career {
  email: string;
  message: string;
  name: string;
  phone: number;
}

interface EnquiryFormData {
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  subject?: string;
  message?: string;
  enquiryType?: string;
  preferredContactMethod?: string;
  productId?: string;
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

export const enquiryForm = async (data: EnquiryFormData) => {
  try {
    const res = await axiosInstance.post("/enquiry/submitEnquiry", {
      data,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
