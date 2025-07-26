"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export interface PersonalInfoValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  gst: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal: string;
}

export interface CardInfoValues {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const personalInfoSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().matches(/^\d{10,15}$/, "Invalid").required("Required"),
  company: Yup.string().required("Required"),
  gst: Yup.string()
    .matches(
      /^(\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1})$/,
      "Invalid GST"
    )
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  postal: Yup.string()
    .matches(/^\d{4,10}$/, "Invalid postal code")
    .required("Required"),
});

const cardInfoSchema = Yup.object({
  cardHolder: Yup.string().required("Required"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Must be 16 digits")
    .required("Required"),
  expiry: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "MM/YY format")
    .required("Required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "3 or 4 digits")
    .required("Required"),
});

export default function BillingForm() {
  const [billingStatus, setBillingStatus] = useState(1);

  const handlePersonalSubmit = (values: PersonalInfoValues) => {
    console.log("Personal Info Submitted:", values);
    setBillingStatus(2);
  };

  const handleCardSubmit = (values: CardInfoValues) => {
    console.log("Card Info Submitted:", values);
    setBillingStatus(3);
  };

  if (billingStatus === 3) {
    return (
      <div className="bg-black/80 w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
        <div className="w-fit h-fit py-[2rem] px-[2rem]  mx-w-[300px] bg-white rounded-lg flex flex-col items-center">
          <span className="text-[#35736E] text-[50px]">
            <IoCheckmarkDoneCircleSharp />
          </span>
          <h1 className="text-[30px] font-bold">Thank you!</h1>
          <p className="w-[100%] text-center">
            Your order is confirmed. Check your email for details.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link href="/customer/home">
              <button className="olive w-full py-2 px-3 rounded-lg">Home</button>
            </Link>
            <Link href="/customer/myorders">
              <button className="light border border-[#35736E] w-full py-2 px-3 rounded-lg">
                Order Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#35736E]">
      <div className="olive flex items-center justify-between px-4 py-3">
        <h1 className={billingStatus === 1 ? "text-amber-400" : ""}>
          Personal Info
        </h1>
        <h1 className={billingStatus === 2 ? "text-amber-400" : ""}>Payment</h1>
        <h1 className={billingStatus === 3 ? "text-amber-400" : ""}>
          Confirmation
        </h1>
      </div>

      <div className="p-6">
        {billingStatus === 1 && (
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              company: "",
              gst: "",
              address: "",
              city: "",
              state: "",
              country: "",
              postal:""
            }}
            validationSchema={personalInfoSchema}
            onSubmit={(values) => {
              console.log("submitted");
              handlePersonalSubmit(values);
            }}
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
                      pattern="[0-9]*"
                      maxLength={15}
                      inputMode="numeric"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.value = e.target.value.replace(/\D/g, ""); // allow only digits
                      }}
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
                  <span className="flex flex-col col-span-1 gap-2">
                    <label htmlFor="city">City</label>
                    <Field
                      type="text"
                      name="city"
                      id="city"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </span>
                  <span className="flex flex-col col-span-1 gap-2">
                    <label htmlFor="state">State</label>
                    <Field
                      type="text"
                      name="state"
                      id="state"
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                    />
                    <ErrorMessage
                      name="state"
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
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.value = e.target.value.replace(/\D/g, ""); // Only digits
                      }}
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
        )}

        {billingStatus === 2 && (
          <Formik
            initialValues={{
              cardHolder: "",
              cardNumber: "",
              expiry: "",
              cvv: "",
            }}
            validationSchema={cardInfoSchema}
            onSubmit={handleCardSubmit}
          >
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <span className="flex flex-col col-span-2">
                <label htmlFor="cardHolder">Card Holder</label>
                <Field
                  name="cardHolder"
                  type="text"
                  className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                />
                <ErrorMessage
                  name="cardHolder"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
              <span className="flex flex-col col-span-2">
                <label htmlFor="cardNumber">Card Number</label>
                <Field
                  name="cardNumber"
                  type="text"
                  className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
              <span className="flex flex-col">
                <label htmlFor="expiry">Expiry (MM/YY)</label>
                <Field
                  name="expiry"
                  type="text"
                  placeholder="MM/YY"
                  className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                />
                <ErrorMessage
                  name="expiry"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
              <span className="flex flex-col">
                <label htmlFor="cvv">CVV</label>
                <Field
                  name="cvv"
                  type="password"
                  className="border shadow-sm px-3 py-2 rounded-md border-[#35736E]"
                />
                <ErrorMessage
                  name="cvv"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
              <button
                type="submit"
                className="olive col-span-2 w-[200px] py-2 mt-4 rounded-lg"
              >
                Confirm Payment
              </button>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
}
