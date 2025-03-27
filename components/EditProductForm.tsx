/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { MdOpenInBrowser } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

interface productProps {
  handleCloseModel: () => void;
  fields: any;
  data: any;
  onsubmit: (arg0: any) => void;
}
interface FormDataType {
  productTitle: string;
  productDescription: string;
  price: string;
  category: string;
  material: string;
  ratings: number;
  stock: string;
}

const EditProductForm = ({
  handleCloseModel,
  fields,
  data,
  onsubmit,
}: productProps) => {
  const [dataUploaded, setDataUploaded] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    productTitle: data.productTitle,
    productDescription: data.productDescription,
    price: data.price,
    category: data.category,
    material: data.material,
    ratings: data.ratings,
    stock: data.stock,
  });
  const [images, setImages] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDataUploaded(true);
    onsubmit(formData)
    handleCloseModel();
  };

  const handleInputImages = (e: any) => {
    const value = e.target.files;
    const limitImges = [...value];
    if (limitImges.length > 5) {
      alert("You can only upload 5 images at most for the Refrence");
      setImages(limitImges.splice(0, 5));
    }
    else{
      setImages(limitImges);
    }
  };

    const handleRemoveImage=(e:any,item:any)=>{
      e.stopPropagation()
      e.preventDefault()
        const newImageArray = images.filter((image:any)=>image.name !==item.name)
        setImages(newImageArray)
    }

  return (
    <div className="h-screen  flex items-center fixed top-0 left-0 w-full  bg-opacity-90 justify-end bg-black/50">
      <div className="bg-white h-[100%]  py-4 rounded-sm shadow-2xl min-w-[350px] w-[45%] ">
        <div className="text-2xl font-bold text-blue-400 w-full  mt-4 mb-6  text-center">
          Edit Product
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col overflow-y-auto px-7  gap-3 h-[90%] text-gray-700"
        >
          {fields.map((field: any) => (
            <div key={field.name} className="mb-4">
              <label className="block text-gray-600 font-medium">
                {field.label}
              </label>

              {/* Conditional rendering based on field type */}
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name as keyof FormDataType]}
                  onChange={handleChange}
                  required
                  className={field.className}
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option: any) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name as keyof FormDataType]}
                  onChange={handleChange}
                  required
                  rows={field.rows || 3}
                  className={field.className}
                />
              ) : field.type === "file" ? (
                <div className={field.wrapperClassName}>
                  <button className={field.buttonClassName}>
                    <MdOpenInBrowser /> Browse Images
                  </button>
                  <input
                    type="file"
                    multiple={field.multiple}
                    onChange={(e) => handleInputImages(e)}
                    className="w-full h-full top-0 left-0 absolute inset-0 opacity-0"
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof FormDataType]}
                  onChange={handleChange}
                  required
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  className={field.className}
                />
              )}

              {field.name === "images" && images?.length > 0 && (
                <div className={field.previewClassName}>
                  {images.map((item:any, index:any) => (
                    <div key={index} className={field.previewItemClassName}>
                      <FaImage />
                      <p className="flex-1">{item.name}</p>
                      <span
                        className={field.iconClassName}
                        onClick={(e) => handleRemoveImage(e,item)}
                      >
                        <IoMdTrash />
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="w-full mt-3 flex justify-end space-x-3">
            <button
              type="submit"
              className="px-4  text-gray-600 border border-gray-300 font-bold py-3 rounded-lg transition duration-300"
              onClick={handleCloseModel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;