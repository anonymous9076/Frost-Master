"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdOpenInBrowser } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { toast } from "react-toastify";
import { updateBlog } from "@/app/api/Blog";
import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

interface Props {
  handleCloseModel1: () => void;
  blogId: string;
}

export default function EditBlogForm({ handleCloseModel1, blogId }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/blogs/${blogId}`);
        const blog = res.data.data;
        setTitle(blog.title);
        setContent(blog.content);
        setCategory(blog.category);
        setStatus(blog.status);
        setImagePreview(blog.imagePath || null);
      } catch (error) {
        toast.error("Failed to fetch blog data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) fetchBlog();
  }, [blogId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const blogData = {
      title,
      content,
      category,
      status,
      image, // file or null
    };

    try {
      setLoading(true);
      await updateBlog(blogId, blogData);
      toast.success("Blog updated successfully");
      handleCloseModel1();
    } catch (error) {
      toast.error("Failed to update blog");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full grid grid-cols-2 h-fit gap-3"
    >
      <h2 className="text-[25px] font-bold col-span-2">Edit Blog Post</h2>

      {/* Title */}
      <div className="col-span-2">
        <label className="block mb-1 font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Category</label>
        <input
          type="text"
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter blog category"
          required
        />
      </div>

      {/* Status */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
          required
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className="col-span-2">
        <label className="block mb-2 font-medium text-gray-700">
          Upload Blog Image
        </label>
        <div className="text-blue-400 bg-white cursor-pointer border border-blue-400 rounded-lg w-full flex items-center relative justify-center py-[3rem]">
          <button type="button" className="flex items-center gap-1">
            <MdOpenInBrowser />
            Browse Image
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full h-full absolute inset-0 opacity-0"
          />
        </div>

        {imagePreview && (
          <div className="flex justify-between items-center border px-3 py-2 mt-2 rounded-md shadow-md">
            <div className="flex items-center gap-2">
              <Image
                // src={imagePreview}
                src={`${process.env.NEXT_PUBLIC_CDNURL}${imagePreview}` || ""}
                alt="Preview"
                className="w-14 h-14 object-cover rounded-md"
                height={400}
                width={400}
              />
              {/* <p className="truncate max-w-[200px] text-sm">
                {image?.name || imagePreview}
              </p> */}
            </div>
            <IoMdTrash
              className="text-red-500 cursor-pointer text-[18px]"
              onClick={handleRemoveImage}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="col-span-2">
        <label className="block mb-1 font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          placeholder="Write blog content..."
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
          required
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex col-span-2 justify-end space-x-3">
        <button
          type="button"
          className="px-4 text-gray-600 border border-gray-300 font-bold py-3 rounded-lg transition duration-300"
          onClick={handleCloseModel1}
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition duration-300"
          disabled={loading}
        >
          {loading ? "Updating..." : "Submit Blog"}
        </button>
      </div>
    </form>
  );
}
