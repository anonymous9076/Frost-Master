import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

export interface BlogPayload {
  title: string;
  content: string;
  category: string;
  status: string;
  image?: File | null;
}

export interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  status: string;
  imagePath?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const createBlog = async (data: BlogPayload) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("content", data.content);
  formData.append("category", data.category);
  formData.append("status", data.status);
  if (data.image) {
    formData.append("image", data.image);
  }

  const response = await axiosInstance.post("/blogs", formData);
  return response.data.data;
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const response = await axiosInstance.get("/blogs");
  return response.data.data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  return response.data.data;
};

export const updateBlog = async (id: string, data: BlogPayload) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("content", data.content);
  formData.append("category", data.category);
  formData.append("status", data.status);
  if (data.image) {
    formData.append("image", data.image);
  }

  const response = await axiosInstance.put(`/blogs/${id}`, formData);
  return response.data.data;
};

export const deleteBlog = async (id: string) => {
  const response = await axiosInstance.delete(`/blogs/${id}`);
  return response.data;
};
