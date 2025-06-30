"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import { axiosInstance } from "../utlis/axiosConfig/AxiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const signupValidation = Yup.object({
  userName: Yup.string().required("Username is required").min(4).max(8),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string().required("Password is required").min(8).max(16),
});
const Signup = () => {
  const router = useRouter();
  // const { mutate, isLoading, isError, error, isSuccess, data } = useSignin();
  interface FormType {
    userName: string;
    email: string;
    password: string;
  }
  const handleSubmit = async (values: FormType) => {
    console.log(values, "values");
    const { userName, email, password } = values;
    try {
      // mutate({ email, password });
      const data = await axiosInstance.post("/auth/register", {
        userName,
        email,
        password,
      });
      console.log(data.data, "abcd");
      toast.success(data.data.message);
      router.push("/signin");
      // if (data.data) {
      //   loginUser(data?.data.userData);
      //   if (data?.data.userData?.roleType === "customer") {
      //     router.push("/customer");
      //   } else {
      //     router.push("/admin/users");
      //   }
      // }
    } catch (error: unknown) {
      console.log(error, "error");
      // toast.error(error.response.data.message);
      // console.error(error.response.data.message);
    }
  };
  return (
    <section className="bg-gray-500  w-full h-screen ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:h-[90vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <h1 className="flex justify-center  text-black pt-8 font-extrabold">
            SIGNUP
          </h1>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Formik
              initialValues={{
                userName: "",
                email: "",
                password: "",
              }}
              validationSchema={signupValidation}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    UserName
                  </label>
                  <Field
                    type="text"
                    name="userName"
                    id="userName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="adom"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  {/* <div className="text-gray-500 text-xs mt-1">
                    Username must be 4–8 characters
                  </div> */}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-gray-50 border ${"border-gray-300"}  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  {/* <div className="text-gray-500 text-xs mt-1">
                    Password must be 8–16 characters
                  </div> */}
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer text-white  bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Signup
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do you have an account?
                  <Link
                    href="/signin"
                    className="font-medium text-primary-600 px-1 text-blue-400 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
