/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { MdOpenInBrowser } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { showProductDetails } from "@/app/api/Admin/routeData";
import { showProductSpec } from "@/app/api/Product";

interface productProps {
  handleCloseModel: () => void;
  title: string;
  fields: any;
  // data: any;
  onsubmit: (arg0: any) => void;
  productId: string;
}
interface FormDataType {
  productTitle: string;
  productDescription: string;
  price: number;
  category: string;
  material: string;
  // ratings: number;
  stock: number;
  suitableFor: string;
  decks: string;
  trays: string;
  maximumTemperature: number;
  materialFront: string;
  materialBody: string;
  powerType: string;
  ignitionType: string;
  energyEfficiency: string;
  fuelConsumption: string;
  digitalDisplay: boolean;
  temperatureControl: string;
  safety: string;
  usage: string;
}

const EditProductForm = ({
  handleCloseModel,
  title,
  fields,
  // data,
  onsubmit,
  productId,
}: productProps) => {
  const [dataUploaded, setDataUploaded] = useState<boolean>(false);
  const [dataUploaded2, setDataUploaded2] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    productTitle: "data.productTitle",
    productDescription: "data.productDescription",
    price: 0,
    category: "data.category",
    material: "data.material",
    // ratings: "data.ratings",
    stock: 0,
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
  const [images, setImages] = useState<any[]>([]);
  const [newImages, setNewImages] = useState<any[]>([]);

  const handleChange = (e: any) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    console.log(name, value, checked, "check the values===>");
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const {
      productTitle,
      productDescription,
      price,
      category,
      material,
      // ratings: "data.ratings",
      stock,
    } = formData;
    const formDataVal: FormData = new FormData();

    newImages.forEach((image: any) => {
      formDataVal.append("files", image);
    });
    formDataVal.append("productTitle", productTitle);
    formDataVal.append("productDescription", productDescription);
    formDataVal.append("price", price.toString());
    formDataVal.append("category", category);
    formDataVal.append("material", material);
    formDataVal.append("stock", stock ? stock.toString() : "1");

    setDataUploaded(true);
    onsubmit(formDataVal);
    handleCloseModel();
  };

  const handleInputImages = (e: any) => {
    const value = e.target.files;
    setNewImages([...value]);
    const limitImges = [...value, ...images];
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

  async function showProductsDetails() {
    const res = await showProductDetails(productId);
    const {
      category,
      // images,
      material,
      price,
      productDescription,
      productTitle,
      stock,
    } = res.data;
    const data = await showProductSpec(productId);
    const {
      decks,
      ignitionType,
      digitalDisplay,
      energyEfficiency,
      fuelConsumption,
      materialBody,
      maximumTemperature,
      powerType,
      safety,
      suitableFor,
      temperatureControl,
      trays,
      usage,
      materialFront,
    } = data.data;

    console.log(data.data, "garuavji");
    // const {} = data.data
    setFormData({
      productTitle: productTitle,
      productDescription: productDescription,
      price: price,
      category: category,
      material: material,
      // ratings: "data.ratings",
      stock: stock,
      suitableFor: suitableFor,
      decks: decks,
      trays: trays,
      maximumTemperature: maximumTemperature,
      materialFront: materialFront,
      materialBody: materialBody,
      powerType: powerType,
      ignitionType: ignitionType,
      energyEfficiency: energyEfficiency,
      fuelConsumption: fuelConsumption,
      digitalDisplay: digitalDisplay === "false" ? false : true,
      temperatureControl: temperatureControl,
      safety: safety,
      usage: usage,
    });
    setImages([...res.data.images]);
    console.log(res.data, "product details here 999");
  }
  useEffect(() => {
    showProductsDetails();
  }, []);

  return (
    <div className="h-screen  flex items-center z-90 fixed top-0 left-0 w-full  bg-opacity-90 justify-end bg-black/50">
      <div className="bg-white h-[100%]  py-4 rounded-sm shadow-2xl min-w-[350px] w-[45%] ">
        <div className="text-2xl font-bold text-blue-400 w-full  mt-4 mb-6  text-center">
          Edit {title}
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
                  value={formData[field.name as keyof FormDataType] as string}
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
              ) : field.type === "checkbox" ? (
                <input
                  type="checkbox"
                  name={field.name}
                  checked={
                    formData[field.name as keyof FormDataType] as boolean
                  }
                  onChange={handleChange}
                  className={field.className}
                />
              ) : field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name as keyof FormDataType] as string}
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
                  value={formData[field.name as keyof FormDataType] as string}
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
                  {images.map((item: any, index: any) => (
                    <div key={index} className={field.previewItemClassName}>
                      <FaImage />
                      <p className="flex-1">
                        {item.name || `item ${index + 1}`}
                      </p>
                      <span
                        className={field.iconClassName}
                        onClick={(e) => handleRemoveImage(e, item)}
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
