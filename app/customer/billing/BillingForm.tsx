"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
interface formdata {
  label?: string;
  name?: string;
  type?: string;
  required?: boolean;
  fields?: form[];
}
interface form {
  label: string;
  name: string;
  type: string;
  required: boolean;
}

interface BillingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  gst: string;
  address: string;
  country: string;
  postal: string;
  cardHolder: string;
  cardNumber: string;
  cvv: string;
  expiry: string;
}

const BillingForm = () => {
  const [billingStatus, setBillingStatus] = useState<number>(1);
  const [formName, setFormName] = useState<formdata[] | undefined>([]);
  const [formData, setFormData] = useState<BillingFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    gst: "",
    address: "",
    country: "",
    postal: "",
    cardHolder: "",
    cardNumber: "",
    cvv: "",
    expiry: "",

  });
  const formFields = [
    {
      type: "group",
      fields: [
        {
          label: "First Name",
          name: "firstName",
          type: "text",
          required: true,
        },
        {
          label: "Last Name",
          name: "lastName",
          type: "text",
          required: true,
        },
      ],
    },
    {
      type: "group",
      fields: [
        {
          label: "Email Address",
          name: "email",
          type: "email",
          required: true,
        },
        { label: "Phone Number", name: "phone", type: "tel", required: true },
      ],
    },

    { label: "Company Name", name: "company", type: "text", required: true },
    { label: "GST NO.", name: "gst", type: "text", required: true },
    {
      label: "Shipping Address",
      name: "address",
      type: "text",
      required: true,
    },
    { label: "Country", name: "country", type: "text", required: true },
    { label: "Postal Code", name: "postal", type: "text", required: true },
  ];
  const cardInfo = [
    {
      label: "Card Holder Name",
      name: "cardHolder",
      type: "text",
      required: true,
    },
    {
      label: "Card Number",
      name: "cardNumber",
      type: "text",
      required: true,
    },
    {
      type: "group",
      fields: [
        {
          label: "CVV",
          name: "cvv",
          type: "text",
          required: true,
        },
        {
          label: "Expiry (MM/YY)",
          name: "expiry",
          type: "month",
          required: true,
        },
      ],
    },
  ];
  useEffect(() => {
    if (billingStatus === 1) {
      setFormName([...formFields]);
    } else {
      setFormName([...cardInfo]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billingStatus]);

  const handleDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  console.log(name,value)
    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  const handleFormsubmit = () => {
    if(billingStatus===2){
        console.log(formData,'===>')
    }
    setBillingStatus((curr) => curr + 1);

  };

  return (
    <>
      {billingStatus === 3 ? (
        <div className="bg-black/80 w-screen h-screen fixed top-0 left-0 flex items-center justify-center ">
          <div className="h-[50%] items-center flex flex-col justify-center  w-[50%] bg-white rounded-lg">
            <span className="text-[#35736E] text-[50px]">
              <IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp>
            </span>
            <h1 className="text-[35px] font-bold">Thank you!</h1>
            <p className="w-[60%] text-center">
              Your order has been confirmed & it is on the way. Check your email
              for the details
            </p>
            <div className="flex gap-2">
              {" "}
              <Link href={"/customer/home"}>
                <button className="olive text-center rounded-lg py-2 mt-4 w-[200px]">
                  Go to Home
                </button>
              </Link>
              <Link href={"/customer/products"}>
                <button className="light text-center border border-[#35736E] rounded-lg py-2 mt-4 w-[200px]">
                  Check Order Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="rounded-lg overflow-hidden border-2 border-[#35736E] ">
        <div className="olive flex items-center justify-between px-4 py-3">
          <h1 className={`${billingStatus === 1 ? "text-amber-400" : ""}`}>
            Personal Info
          </h1>
          <h1 className={`${billingStatus === 2 ? "text-amber-400" : ""}`}>
            Payment
          </h1>
          <h1 className={`${billingStatus === 3 ? "text-amber-400" : ""}`}>
            Confirmation
          </h1>
        </div>

        <div className="px-[2rem] py-[2rem] grid gap-6">
          {formName&&formName.map((field, index) => {
            if (field.type === "group") {
              return (
                <div key={index} className="grid grid-cols-2 gap-4">
                  {field?.fields &&
                    field.fields.map((subField: formdata, subIndex: number) => (
                      <span key={subIndex} className="flex flex-col gap-2">
                        <label htmlFor={subField.name}>
                          {subField.label}
                          {subField.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <input
                          type={subField.type}
                          name={subField.name}
                          id={subField.name}
                          value={formData[subField.name as keyof BillingFormValues] ?? ""}
                          onChange={(e) => handleDataInput(e)}
                          required={subField.required}
                          className="border shadow-sm px-3 py-2 rounded-md border-gray-400"
                        />
                      </span>
                    ))}
                </div>
              );
            }

            return (
              <span key={index} className="flex flex-col gap-2">
                <label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name as keyof BillingFormValues] ?? ""}
                  onChange={(e) => handleDataInput(e)}
                  required={field.required}
                  className="border shadow-sm px-3 py-2 rounded-md border-gray-400"
                />
              </span>
            );
          })}

          <button
            onClick={handleFormsubmit}
            className="olive text-center rounded-lg py-2 mt-4 w-[200px]"
          >
            {billingStatus == 1 ? "Proceed to Checkout" : "Proceed to Pay"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BillingForm;
