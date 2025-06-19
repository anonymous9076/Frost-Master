import { enquiryForm } from "@/app/api/Customer";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface EnquiryFormData {
  fullName: string;
  emailAddress: string;
  phoneNumber?: string;
  subject: string;
  message: string;
  enquiryType: "General" | "Support" | "Sales" | "Feedback";
  preferredContactMethod: "Email" | "Phone";
  productId: string;
}
interface EnquiryPropField {
  id: string;
  active: boolean;
}
const EnquiryModel = ({ data }: { data: EnquiryPropField }) => {
  console.log(typeof data.id, "prop data");
  const [openModel, setOpenModel] = useState<boolean>(data.active);
  const [productId, setProductId] = useState(data?.id);
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    subject: "",
    message: "",
    enquiryType: "General",
    preferredContactMethod: "Email",
    productId: productId,
  });
  const handleCloseModel = () => {
    setOpenModel(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await enquiryForm(formData);
      toast.success(res.message);
      setOpenModel(false);
    } catch (error) {
      console.log(error);
      toast.error("Enquiry form Invalid");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    setOpenModel(data.active);
    setProductId(data.id);
  }, [data]);

  return (
    <div
      className={`h-[90dvh] top-[10dvh] left-0 bg-black/80 w-[100dvw] justify-center items-center fixed z-40 ${
        openModel ? "flex" : "hidden"
      }`}
    >
      <div className="rounded-md light w-[90%] md:w-[70%] lg:w-[40%] min-w-[350px] py-[2rem] h-[80dvh]">
        <form
          onSubmit={handleSubmit}
          className="px-[2rem]  rounded-md light h-full w-full  overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="items-center flex justify-between text-[25px] font-bold text-[#35736E] py-3">
            {" Fill Your Enquiry"}
            <span onClick={handleCloseModel}>
              <RxCross2></RxCross2>
            </span>{" "}
          </div>
          <div className="w-full">
            <label className="block text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div className="w-full mt-2">
            <label className="block text-gray-600 font-medium ">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              className="w-full p-2  border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div className="w-full mt-2">
            <label className="block text-gray-600 font-medium ">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div className="w-full mt-2">
            <label className="block text-gray-600 font-medium ">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div className="w-full mt-2">
            <label className="block text-gray-600 font-medium">
              Message / Enquiry Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div className="w-full mt-2">
            <label className="block text-gray-600 font-medium">
              Enquiry Type
            </label>
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              <option value="General">General</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>

          <div className="w-full mt-2">
            <label className="block text-gray-600 font-medium">
              Preferred Contact Method
            </label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
          <button className="olive py-2 px-4 rounded-md mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModel;
