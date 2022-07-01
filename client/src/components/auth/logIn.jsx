import React from "react";
import { Formik } from "formik";
import { useRef, useState } from "react";
import Link from "next/link";
// import { Input } from "@material-tailwind/react";
// import { ToastContainer, toast } from "react-toastify";
// import { LoadingOverlay } from "../loading";
import { IoMailSharp, IoCloseOutline, IoEyeOutline } from "react-icons/io5";
import { useUIContext } from "../../modules/context";
export default function LogIn() {
  const { unmountOverlay } = useUIContext();
  let initalFormState = { email: "", password: "" };
  const handlePwdReveal = () => {};
  return (
    <div className="bg-white h-[400px] overflow-auto p-2 rounded-lg">
      <div className="flex flex-nowrap items-center justify-between px-2 border-b border-smoke h-12 sm:px-4">
        <h3 className="font-bold uppercase text-dark">Log In</h3>
        <button
          className="p-[4px] hover:bg-smoke rounded-full "
          onClick={unmountOverlay}
        >
          <IoCloseOutline size={28} />
        </button>
      </div>
      <Formik
        initialValues={initalFormState}
        validate={(values) => validator(values)}
        onSubmit={(values, actions) => submitHandler(values, actions)}
        validateOnChange={false}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-1 sm:px-4 "
          >
            <label
              htmlFor="email"
              className="mt-3 mb-1 text-para  text-dark font-regular"
            >
              Email :
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className=" font-regular text-lg   border border-smoke  outline-none px-2 py-2 "
              size="2"
            />
            <label
              htmlFor="password"
              className="mt-3 text-para text-dark font-regular"
            >
              Password :
            </label>
            <div
              id="password"
              className="flex flex-nowrap gap-1  border border-smoke rounded-sm"
            >
              <input
                size="3"
                type="password"
                placeholder="Enter password"
                className="flex-1 pl-2  text-lg font-regular outline-none border-none"
              />
              <button className="p-2" onClick={handlePwdReveal}>
                <IoEyeOutline size={26} fill="#444444" />
              </button>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-orange hover:bg-opacity-90 text-white py-3 rounded-sm w-full text-para uppercase font-bold font-light"
              >
                Log In
              </button>
            </div>
            <div className="text-center font-light text-dark mt-3 mb-1">
              We logging in , you agree to our
              <Link href="/terms-of-service" passHref>
                <a className=" underline underline-offset-2 text-dark px-1">
                  terms of service
                </a>
              </Link>
              and
              <Link href="/privacy-policy" passHref>
                <a className=" underline underline-offset-2 text-dark px-1 ">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
