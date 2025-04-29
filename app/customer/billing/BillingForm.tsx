"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import * as Yup from "yup";
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

const billingFormValidation = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number is not valid")
    .required("Phone number is required"),
  company: Yup.string().required("Company name is required"),
  gst: Yup.string()
    .matches(
      /^(\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1})$/,
      "Invalid GST number"
    )
    .required("GST number is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  postal: Yup.string()
    .matches(/^\d{4,10}$/, "Invalid postal code")
    .required("Postal code is required"),

  // Payment Fields
  cardHolder: Yup.string().required("Card holder name is required"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
  expiry: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Expiry must be in MM/YY format")
    .required("Expiry date is required"),
});

const BillingForm = () => {
  const [billingStatus, setBillingStatus] = useState<number>(1);
  useEffect(() => {
    setBillingStatus(1);
  }, [billingStatus]);

  const handleFormSubmit = (values: BillingFormValues) => {
    console.log(values, "values");
  };

  return (
    <>
      {billingStatus === 3 ? (
        <div className="bg-black/80 w-screen h-screen fixed top-0 left-0 flex items-center justify-center ">
          <div className="min-h-[50%] py-[2rem] md:py-[1rem] h-fit  items-center flex flex-col justify-center w-[90%]  md:w-[50%] bg-white rounded-lg">
            <span className="text-[#35736E] text-[50px]">
              <IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp>
            </span>
            <h1 className="text-[35px] font-bold">Thank you!</h1>
            <p className="w-[60%] text-center">
              Your order has been confirmed & it is on the way. Check your email
              for the details
            </p>
            <div className="flex md:flex-row flex-col gap-2">
              {" "}
              <Link href={"/customer/home"}>
                <button className="olive text-center rounded-lg py-2 mt-4 w-[180px]">
                  Go to Home
                </button>
              </Link>
              <Link href={"/customer/products"}>
                <button className="light text-center border border-[#35736E] rounded-lg py-2 md:mt-4 w-[180px]">
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
          <Formik
            initialValues={{
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
            }}
            validationSchema={billingFormValidation}
            onSubmit={handleFormSubmit}
          >
            <Form className="flex flex-col gap-6">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <span className="flex flex-col gap-2">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col gap-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone</label>
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col col-span-2 gap-2">
                    <label htmlFor="company">Company</label>
                    <Field
                      type="text"
                      name="company"
                      id="company"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col col-span-2 gap-2">
                    <label htmlFor="gst">GST Number</label>
                    <Field
                      type="text"
                      name="gst"
                      id="gst"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="gst"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col gap-2 col-span-2">
                    <label htmlFor="address">Address</label>
                    <Field
                      type="text"
                      name="address"
                      id="address"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col col-span-2 gap-2">
                    <label htmlFor="country">Country</label>
                    <Field
                      type="text"
                      name="country"
                      id="country"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>

                  <span className="flex flex-col col-span-2 gap-2">
                    <label htmlFor="postal">Postal Code</label>
                    <Field
                      type="text"
                      name="postal"
                      id="postal"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="postal"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>
                </div>
              </div>
              <button
                // onClick={handleFormsubmit}
                type="submit"
                className="olive text-center rounded-lg py-2 mt-4 w-[200px] cursor-pointer"
              >
                {billingStatus == 1 ? "Proceed to Checkout" : "Proceed to Pay"}
              </button>
            </Form>
          </Formik>
          {/* {billingStatus === 1 ? (
            <></>
          ) : 
          (
            <Formik
            >
              <form>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="flex flex-col gap-2 col-span-2">
                      <label htmlFor="cardHolder">Card Holder Name</label>
                      <Field
                        type="text"
                        name="cardHolder"
                        id="cardHolder"
                        value={formData.cardHolder}
                                                className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                      />
                    </span>

                    <span className="flex flex-col gap-2 col-span-2">
                      <label htmlFor="cardNumber">Card Number</label>
                      <Field
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        value={formData.cardNumber}
                                                className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                      />
                    </span>

                    <span className="flex flex-col gap-2">
                      <label htmlFor="expiry">Expiry Date</label>
                      <Field
                        type="text"
                        name="expiry"
                        id="expiry"
                        placeholder="MM/YY"
                        value={formData.expiry}
                                                className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                      />
                    </span>

                    <span className="flex flex-col gap-2">
                      <label htmlFor="cvv">CVV</label>
                      <Field
                        type="password"
                        name="cvv"
                        id="cvv"
                        value={formData.cvv}
                                                className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                      />
                    </span>
                  </div>
                </div>
              </form>
            </Formik>
          )} */}
        </div>
      </div>
    </>
  );
};

export default BillingForm;
