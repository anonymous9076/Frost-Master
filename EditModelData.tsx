const productFields = [
  {
    name: "productTitle",
    label: "Product Title",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: ["Cookware", "Bakeware", "Cutlery"],
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "material",
    label: "Material",
    type: "select",
    options: [
      "Stainless Steel",
      "Plastic",
      "Wood",
      "Glass",
      "Silicone",
      "Ceramic",
      "Other",
    ],
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  // {
  //   name: "ratings",
  //   label: "Ratings (0 to 5)",
  //   type: "number",
  //   min: 0,
  //   max: 5,
  //   step: 0.1,
  //   className:
  //     "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  // },
  {
    name: "stock",
    label: "Stock",
    type: "number",
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "productDescription",
    label: "Product Description",
    type: "textarea",
    rows: 3,
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "images",
    label: "Product Images",
    type: "file",
    multiple: true,
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
    previewClassName: "text-gray-500 space-y-2  my-[2rem]",
    previewItemClassName:
      "w-full flex items-center border border-gray-300 rounded-md py-2 px-3  gap-2 justify-between",
    buttonClassName: "flex items-center gap-1",
    wrapperClassName:
      "text-blue-400 border py-[2rem] border-blue-400 rounded-lg w-full flex items-center relative justify-center ",
    iconClassName: "text-red-500 text-[20px]",
  },
];

const productData = {
  productTitle: "Premium Stainless Steel Cookware Set",
  price: 149.99,
  category: "Cookware",
  material: "Stainless Steel",
  // "ratings": 4.7,
  // "stock": 25,
  productDescription:
    "This premium stainless steel cookware set includes multiple pots and pans that are durable, heat-resistant, and easy to clean. Ideal for home chefs looking to elevate their cooking experience.",
};

export default { productData, productFields }; //default is removed
