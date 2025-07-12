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
  // {
  //   name: "category",
  //   label: "Category",
  //   type: "select",
  //   options: ["Cookware", "Bakeware", "Cutlery"],
  //   className:
  //     "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  // },
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
    name: "suitableFor",
    label: "Suitable For",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "decks",
    label: "Decks",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "trays",
    label: "Trays",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "maximumTemperature",
    label: "Maximum Temperature (°C)",
    type: "number",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "materialFront",
    label: "Front Material",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "materialBody",
    label: "Body Material",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "powerType",
    label: "Power Type",
    type: "select",
    options: ["Electric", "Gas", "Dual Fuel"],
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "ignitionType",
    label: "Ignition Type",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "energyEfficiency",
    label: "Energy Efficiency",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "fuelConsumption",
    label: "Fuel Consumption",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "digitalDisplay",
    label: "Digital Display",
    type: "checkbox",
    className: "ml-2 text-sm text-gray-600",
  },
  {
    name: "temperatureControl",
    label: "Temperature Control",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "safety",
    label: "Safety Features",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "usage",
    label: "Usage",
    type: "textarea",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
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

const enquiryFields = [
  {
    name: "customerName",
    label: "Customer Name",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },

  {
    name: "createdTime",
    label: "Created Time",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "productName",
    label: "Product Name",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "category",
    label: "Category",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "price",
    label: "Price",
    type: "text",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    className:
      "w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["Completed", "Processing"],
    className:
      "w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
  },
];

const enquiryData = {
  customerName: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 555-123-4567",
  status: "Pending",
  createdTime: "2025-04-11T10:30", // ISO format for datetime-local input
  productName: "Solar Panel X200",
  category: "Solar Equipment",
  price: 1299.99,
  description: "High-efficiency solar panel suitable for residential use.",
};

export default { productData, productFields, enquiryData, enquiryFields }; //default is removed
