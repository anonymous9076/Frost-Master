import { MdOpenInBrowser } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";

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
  const [imagePreview, setImagePreview] = useState<string | null>(null); // for URL string

  // Simulate fetching blog by ID
  useEffect(() => {
    if (blogId) {
      // Fetch blog data from backend (mocked here)
      setTitle("edit title");
      setContent("edit content");
      setCategory("new cat");
      setStatus("published");
      setImage(null); // no new file initially
      setImagePreview("/oven2.jpg"); // replace with image URL from backend
    }
  }, [blogId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // for live preview
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleFormSubmit = () => {
    const blogData = {
      title,
      content,
      category,
      status,
      imagePath: image ? image.name : imagePreview || "", 
    };
    console.log("Submitted blog data:", blogData);
    // handleSubmitBlog(blogData, image); // your upload logic
    handleCloseModel1();
  };

  return (
    <div className="w-full grid grid-cols-2 h-fit gap-3">
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
        />
      </div>

      {/* Status */}
      <div>
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
      <div className="col-span-2">
        <label className="block mb-2 font-medium text-gray-700">
          Upload Blog Image
        </label>
        <div className="text-blue-400 bg-white cursor-pointer border border-blue-400 rounded-lg w-full flex items-center relative justify-center py-[3rem]">
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

        {imagePreview && (
          <div className="flex justify-between items-center border px-3 py-2 mt-2 rounded-md shadow-md">
            <div className="flex items-center gap-2">
              <Image
                src={imagePreview}
                alt="Preview"
                className="w-14 h-14 object-cover rounded-md"
                height={400}
                width={400}
              />
              <p className="truncate max-w-[200px] text-sm">
                {image?.name || imagePreview}
              </p>
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
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex col-span-2 justify-end space-x-3">
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
