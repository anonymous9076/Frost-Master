/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { MdOpenInBrowser } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import {
  addProduct,
  addProductImages,
  addProductSpecification,
} from "@/app/api/Admin/routeData";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import {
  addCategory,
  addSubCategory,
  getCategory,
  getSubCategory,
} from "@/app/api/Product";
interface productProps {
  handleCloseModel: () => void;
}

const ProductForm = ({ handleCloseModel }: productProps) => {
  const [formData, setFormData] = useState({
    productTitle: "",
    productDescription: "",
    price: 0,
    category: "",
    material: "",
    subcategory: "",
    // ratings: 0,
    // stock: "",
  });
  const [formDataProductSpec, setFormDataProductSpec] = useState({
    suitableFor: "",
    decks: "",
    trays: "",
    maximumTemperature: 0,
    materialFront: "",
    materialBody: "",
    powerType: "",
    ignitionType: "",
    energyEfficiency: "",
    fuelConsumption: "",
    digitalDisplay: false,
    temperatureControl: "",
    safety: "",
    usage: "",
  });
  const [newCatObj, setNewCatObj] = useState({
    category: "",
    subcategory: "",
  });
  const [dataUploaded, setDataUploaded] = useState<boolean>(false);
  const [dataUploaded2, setDataUploaded2] = useState<boolean>(false);
  const [addNewCats, setAddNewCats] = useState<string>("");
  const [addModelOpen, setAddModelOpen] = useState<boolean>(false);
  const [images, setImages] = useState<any>([]);
  const [addedProductId, setAddedProductId] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);

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
    if (value === "addMore") {
      setAddModelOpen(true);
      // console.log(name)
      setAddNewCats(name);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddNewCat = (e: any) => {
    const { name, value } = e.target;
    setNewCatObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitNewCat = () => {
    console.log(newCatObj, "hellog");
    if (newCatObj.category) {
      createCategory(newCatObj.category);
    } else if (newCatObj.subcategory) {
      createSubCategory(newCatObj.subcategory);
    } else {
      toast.error(`Please enter a valid ${addNewCats} name`);
    }

    setNewCatObj({
      category: "",
      subcategory: "",
    });
    setAddModelOpen(false);
  };

  const handleChangeProductSpec = (e: any) => {
    const { name, value, checked, type } = e.target;
    setFormDataProductSpec({
      ...formDataProductSpec,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //first submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    const {
      productTitle,
      productDescription,
      price,
      category,
      subcategory,
      material,
      // suitableFor,
      // decks,
      // trays,
      // maximumTemperature,
      // materialFront,
      // materialBody,
      // powerType,
      // ignitionType,
      // energyEfficiency,
      // fuelConsumption,
      // digitalDisplay,
      // temperatureControl,
      // safety,
      // usage,
    } = formData;
    const res = await addProduct(
      productTitle,
      productDescription,
      price,
      category,
      subcategory,
      material
    );
    // console.log(res.data, "res here9999");
    setAddedProductId(res.data._id);
    setDataUploaded2(true);
    // handleCloseModel();
  };
  const handleSubmit2 = async (e: any) => {
    console.log(formDataProductSpec);
    e.preventDefault();
    await addProductSpecification(formDataProductSpec, addedProductId);
    setDataUploaded(true);
  };

  async function compressImageData(image: File): Promise<File> {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    const res = await imageCompression(image, options);
    return res;
  }

  const submitFiles = async () => {
    const formData: FormData = new FormData();

    const compressedImages = await Promise.all(
      images.map(async (image: any) => {
        return await compressImageData(image);
      })
    );

    compressedImages.forEach((compressed) => {
      formData.append("files", compressed);
    });

    const res = await addProductImages(formData, addedProductId);
    console.log(res, "image upload res");
  };

  const handleInputImages = (e: any) => {
    const value = e.target.files;
    const limitImges = [...value];
    console.log(value, "img val");
    if (limitImges.length > 5) {
      alert("You can only upload 5 images at most for the Refrence");
      return;
    }
    setImages(limitImges.splice(0, 5));
  };

  const handleRemoveImage = (e: any, item: any) => {
    e.stopPropagation();
    e.preventDefault();
    const newImageArray = images.filter(
      (image: any) => image.name !== item.name
    );
    setImages(newImageArray);
  };

  async function getcategories() {
    try {
      const data: string[] = await getCategory();
      setCategories(data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to add category");
    }
  }
  async function getSubCategories() {
    try {
      const data = await getSubCategory();
      setSubCategories(data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to add category");
    }
  }
  async function createCategory(data: string) {
    console.log(data, "ehrlo");
    try {
      await addCategory(data);
      getcategories();
      toast.success("Category added!");
    } catch (err) {
      console.log(err);

      toast.error("Failed to add category");
    }
  }
  async function createSubCategory(data: string) {
    try {
      await addSubCategory(data);
      getSubCategories();
      toast.success("Category added!");
    } catch (err) {
      console.log(err);

      toast.error("Failed to add category");
    }
  }

  useEffect(() => {
    getcategories();
    getSubCategories();
  }, []);
  return (
    <div className="min-h-screen flex items-center z-90 fixed top-0 left-0 w-full h-screen  justify-end bg-black/50">
      <div className="bg-white h-[100%] relative  py-4 rounded-lg shadow-2xl min-w-[320px] w-[45%] ">
        {addModelOpen ? (
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center top-0 left-0">
            <div className="h-fit rounded-lg w-[400px] bg-white shadow-lg shadow-gray-400 p-3">
              <div className="text-xl font-bold text-blue-400 w-full text-center">
                Add New {addNewCats}
              </div>
              <input
                name={addNewCats}
                onChange={handleAddNewCat}
                className="w-full border px-2 py-1 rounded-lg my-4 text-black focus:outline-blue-400 border-gray-300"
                type="text"
                placeholder={`Enter the ${addNewCats} `}
              ></input>
              <div className="w-full h-fit mt-3 flex justify-end space-x-3">
                <button
                  type="submit"
                  className="px-4  text-gray-600 border border-gray-300 font-bold py-1 rounded-lg transition duration-300"
                  onClick={() => setAddModelOpen(false)}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitNewCat}
                  type="submit"
                  className="px-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="text-2xl font-bold text-blue-400 w-full  mt-4 mb-6  text-center">
          Add New Product
        </div>
        {dataUploaded ? (
          <div className="px-7 w-full">
            <h2 className="text-[25px] font-bold">Product Images</h2>
            <div className="text-blue-400 cursor-pointer border border-blue-400 rounded-lg w-full flex items-center relative justify-center py-[3rem]">
              <button className="flex items-center gap-1 ">
                {" "}
                <MdOpenInBrowser></MdOpenInBrowser>Browse Images
              </button>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleInputImages(e)}
                className=" w-full h-full top-0 left-0 bg-red-500 absolute inset-0 opacity-0"
              ></input>
            </div>
            <div className="text-gray-500  space-y-2 my-[2rem]">
              {images &&
                images.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="w-full border border-gray-100 rounded-md px-3 py-2 shadow-md flex items-center gap-2 justify-between"
                  >
                    <FaImage></FaImage>
                    <p className="flex-1">{item.name}</p>
                    <span
                      className="text-red-500 text-[18px]"
                      onClick={(e) => handleRemoveImage(e, item)}
                    >
                      <IoMdTrash></IoMdTrash>
                    </span>
                  </div>
                ))}
            </div>
            <p className="text-slate-600">
              <span>Note:</span> You can only upload 5 images at most for the
              Refrence
            </p>
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
                onClick={() => {
                  handleCloseModel();
                  submitFiles();
                }}
              >
                Submit Form
              </button>
            </div>
          </div>
        ) : dataUploaded2 ? (
          <form
            onSubmit={handleSubmit2}
            className="flex flex-col overflow-y-auto px-7 text-gray-500 gap-4 h-[90%]"
          >
            {/* Suitable For */}
            <h2 className="text-[25px] font-bold">Product Specifications</h2>
            <div>
              <label className="block text-gray-600 font-medium">
                Suitable For
              </label>
              <input
                type="text"
                name="suitableFor"
                value={formDataProductSpec.suitableFor}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Decks */}
            <div>
              <label className="block text-gray-600 font-medium">Decks</label>
              <input
                type="text"
                name="decks"
                value={formDataProductSpec.decks}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Trays */}
            <div>
              <label className="block text-gray-600 font-medium">Trays</label>
              <input
                type="text"
                name="trays"
                value={formDataProductSpec.trays}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Maximum Temperature */}
            <div>
              <label className="block text-gray-600 font-medium">
                Maximum Temperature
              </label>
              <input
                type="number"
                name="maximumTemperature"
                value={formDataProductSpec.maximumTemperature}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Material Front & Body */}
            <div className="w-full flex items-center gap-3">
              <div className="w-full">
                <label className="block text-gray-600 font-medium">
                  Material Front
                </label>
                <input
                  type="text"
                  name="materialFront"
                  value={formDataProductSpec.materialFront}
                  onChange={handleChangeProductSpec}
                  required
                  className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-600 font-medium">
                  Material Body
                </label>
                <input
                  type="text"
                  name="materialBody"
                  value={formDataProductSpec.materialBody}
                  onChange={handleChangeProductSpec}
                  required
                  className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>
            </div>

            {/* Power Type */}
            <div>
              <label className="block text-gray-600 font-medium">
                Power Type
              </label>
              <input
                type="text"
                name="powerType"
                value={formDataProductSpec.powerType}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Ignition Type */}
            <div>
              <label className="block text-gray-600 font-medium">
                Ignition Type
              </label>
              <input
                type="text"
                name="ignitionType"
                value={formDataProductSpec.ignitionType}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Energy Efficiency */}
            <div>
              <label className="block text-gray-600 font-medium">
                Energy Efficiency
              </label>
              <input
                type="text"
                name="energyEfficiency"
                value={formDataProductSpec.energyEfficiency}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Fuel Consumption */}
            <div>
              <label className="block text-gray-600 font-medium">
                Fuel Consumption
              </label>
              <input
                type="text"
                name="fuelConsumption"
                value={formDataProductSpec.fuelConsumption}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Digital Display */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="digitalDisplay"
                checked={formDataProductSpec.digitalDisplay}
                onChange={handleChangeProductSpec}
                className="mr-2 transition duration-300"
              />
              <label className="text-gray-600 font-medium">
                Digital Display
              </label>
            </div>

            {/* Temperature Control */}
            <div>
              <label className="block text-gray-600 font-medium">
                Temperature Control
              </label>
              <input
                type="text"
                name="temperatureControl"
                value={formDataProductSpec.temperatureControl}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Safety */}
            <div>
              <label className="block text-gray-600 font-medium">Safety</label>
              <input
                type="text"
                name="safety"
                value={formDataProductSpec.safety}
                onChange={handleChangeProductSpec}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Usage */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Usage</label>
              <textarea
                name="usage"
                value={formDataProductSpec.usage}
                onChange={handleChangeProductSpec}
                rows={3}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            {/* Submit & Cancel Buttons */}
            <div className="w-full h-fit mt-3 flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 text-gray-600 border border-gray-300 font-bold py-3 rounded-lg transition duration-300"
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
        ) : (
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col overflow-y-auto px-7 text-gray-500 gap-4 h-[90%]"
          >
            {/* Product Title */}
            <h2 className="text-[25px] font-bold">Product Details</h2>

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
                <label className="flex justify-between items-center text-gray-600 font-medium">
                  Category
                  {/* <span className="bg-blue-400 h-5 w-5 text-white rounded-sm flex items-center justify-center">
                  + 
                  </span> */}
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg border-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Category</option>
                  <option className="bg-blue-400 text-white" value="addMore">
                    + Add More
                  </option>
                  {categories?.map((category) => (
                    <option
                      className="hover:bg-blue-400"
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* subcategories */}
              <div className="w-full">
                <label className=" justify-between items-center text-gray-600 flex font-medium">
                  Sub-Category
                  {/* <span className="bg-blue-400 h-5 w-5 text-white rounded-sm flex items-center justify-center">
                  + 
                  </span> */}
                </label>
                <select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Sub-Category</option>
                  <option className="bg-blue-400 text-white" value="addMore">
                    + Add More
                  </option>
                  {subCategories?.map((category) => (
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
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ratings */}
            {/*
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
*/}
            {/* Stock */}
            {/* <div className="">
              <label className="block text-gray-600 font-medium ">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div> */}
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
