/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { MdOpenInBrowser } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

interface productProps {
  handleCloseModel: () => void;
}

const ProductForm = ({ handleCloseModel }: productProps) => {
  const [formData, setFormData] = useState({
    productTitle: "",
    productDescription: "",
    price: "",
    category: "",
    material: "",
    ratings: 0,
    stock: "",
  });
  const [dataUploaded, setDataUploaded] = useState<boolean>(false);
  const [images,setImages]= useState<any>([])

  const categories = [
    "Cookware",
    "Bakeware",
    "Cutlery",
    "Storage",
    "Tableware",
    "Others",
  ];

  const materials = [
    "Stainless Steel",
    "Plastic",
    "Wood",
    "Glass",
    "Silicone",
    "Ceramic",
    "Other",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setDataUploaded(true);
    // handleCloseModel();
  };

  const handleInputImages=(e:any)=>{
    const value= e.target.files
    const limitImges = [...value]
    if(limitImges.length>5){
      alert('You can only upload 5 images at most for the Refrence')
      setImages(limitImges.splice(0,5))
    }
  }

  const handleRemoveImage=(e:any,item:any)=>{
    e.stopPropagation()
    e.preventDefault()
      const newImageArray = images.filter((image:any)=>image.name !==item.name)
      setImages(newImageArray)
  }


  return (
    <div className="min-h-screen flex items-center fixed top-0 left-0 w-full h-screen  justify-end bg-black/50">
      <div className="bg-white h-[100%]  py-4 rounded-lg shadow-2xl min-w-[350px] w-[45%] ">
        <div className="text-2xl font-bold text-blue-400 w-full  mt-4 mb-6  text-center">
          Add New Product
        </div>
        {dataUploaded ? (
          <div className="px-7 w-full">
          <div className="text-blue-400 border border-blue-400 rounded-lg w-full flex items-center relative justify-center py-[3rem]">
            <button className="flex items-center gap-1"> <MdOpenInBrowser></MdOpenInBrowser>Browse Images</button>
            <input type="file" multiple onChange={(e)=>handleInputImages(e)} className=" w-full h-full top-0 left-0 bg-red-500 absolute inset-0 opacity-0"></input>
          </div>
          <div className="text-gray-500  space-y-2 my-[2rem]">
          {images&& images.map((item:any,index:any)=>
            <div key={index} className="w-full border border-gray-100 rounded-md px-3 py-2 shadow-md flex items-center gap-2 justify-between">
            <FaImage></FaImage>
            <p className="flex-1">{item.name}</p>
            <span className="text-red-500 text-[18px]" onClick={(e)=>handleRemoveImage(e,item)}><IoMdTrash></IoMdTrash></span>
          </div>
          )}
          </div>
          <p className="text-slate-600"><span>Note:</span> You can only upload 5 images at most for the Refrence</p>
          <div className="w-full h-fit mt-5 flex justify-end space-x-3">
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
                onClick={handleCloseModel}
              >
                Submit Form
              </button>
            </div>
          </div>


        ) : (
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col overflow-y-auto px-7 text-gray-500 gap-4 h-[90%]"
          >
            {/* Product Title */}
            <div>
              <label className="block text-gray-600 font-medium ">
                Product Title
              </label>
              <input
                type="text"
                name="productTitle"
                value={formData.productTitle}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-400 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 font-medium ">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="w-full flex items-center gap-3">
              {/* Category */}

              <div className="w-full">
                <label className="block text-gray-600 font-medium">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material */}
              <div className="w-full">
                <label className="block text-gray-600 font-medium ">
                  Material
                </label>
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Material</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ratings */}
            <div>
              <label className="block text-gray-600 font-medium ">
                Ratings (0 to 5)
              </label>
              <input
                type="number"
                name="ratings"
                value={formData.ratings}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Stock */}
            <div className="">
              <label className="block text-gray-600 font-medium ">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Product Description */}
            <div className="">
              <label className="block text-gray-500 font-medium ">
                Product Description
              </label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full h-fit mt-3 flex justify-end space-x-3">
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
        )}
      </div>
    </div>
  );
};

export default ProductForm;
