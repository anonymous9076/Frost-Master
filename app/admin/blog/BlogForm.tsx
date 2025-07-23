import { MdOpenInBrowser } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useState } from "react";
import { createBlog } from "@/app/api/Blog";
import { toast } from "react-toastify";

interface Props {
  handleCloseModel1: () => void;
}

export default function BlogForm({ handleCloseModel1 }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleFormSubmit = async () => {
    try {
      await createBlog({ title, content, category, status, image });
      toast.success("Blog created successfully!");
      handleCloseModel1();
    } catch (err) {
      console.log(err);
      toast.error("Failed to create blog");
    }
  };

  return (
    <div className=" w-full grid grid-cols-2 h-fit gap-3">
      <h2 className="text-[25px] font-bold col-span-2">Add Blog Post</h2>

      {/* Title */}
      <div className=" col-span-2 ">
        <label className="block mb-1 font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
        />
      </div>

      {/* Category */}
      <div className="">
        <label className="block mb-1 font-medium text-gray-700">Category</label>
        <input
          type="text"
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter blog category"
        />
      </div>

      {/* Status */}
      <div className="">
        <label className="block mb-1 font-medium text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border bg-white border-gray-200 outline-none rounded-lg px-3 py-2"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className=" col-span-2">
        <label className="block mb-2  font-medium text-gray-700">
          Upload Blog Image
        </label>
        <div className="text-blue-400 bg-white outline-none cursor-pointer border border-blue-400 rounded-lg w-full flex items-center relative justify-center py-[3rem]">
          <button className="flex items-center gap-1">
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
        {image && (
          <div className=" flex justify-between items-center border px-3 py-2 rounded-md shadow-md">
            <p>{image.name}</p>
            <IoMdTrash
              className="text-red-500 cursor-pointer text-[18px]"
              onClick={() => setImage(null)}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className=" col-span-2">
        <label className="block mb-1 font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          placeholder="Write blog content..."
          className="w-full border  bg-white border-gray-200 outline-none  rounded-lg px-3 py-2"
        />
      </div>

      {/* Buttons */}
      <div className="w-full h-fit  flex col-span-2 justify-end space-x-3">
        <button
          type="button"
          className="px-4 text-gray-600 border border-gray-300 font-bold py-3 rounded-lg transition duration-300"
          onClick={handleCloseModel1}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition duration-300"
          onClick={handleFormSubmit}
        >
          Submit Blog
        </button>
      </div>
    </div>
  );
}
