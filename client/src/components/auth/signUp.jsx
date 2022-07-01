import { Formik } from "formik";
import { useRef, useState } from "react";

// import { Input } from "@material-tailwind/react";
// import { ToastContainer, toast } from "react-toastify";
// import { LoadingOverlay } from "../loading";
import { IoMailSharp, IoCloseOutline } from "react-icons/io5";
import { useUIContext } from "../../modules/context";
export default function SignUpForm() {
  const { unmountOverlay } = useUIContext();
  let initalFormState = { email: "", password: "" };
  return (
    <div className="bg-white h-[400px] overflow-auto p-2 rounded-lg">
      <div className="flex flex-nowrap items-center justify-between px-2 border-b border-smoke h-12">
        <h3 className="font-bold uppercase text-dark">Welcome</h3>
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
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email :</label>
            <input type="email" placeholder="Enter Email" className=" d " />
            <label htmlFor="password">
              <div className="flex flex-nowrap px-1 gap-1 ">
                <input type="password" placeholder="Enter password" />
              </div>
            </label>
          </form>
        )}
      </Formik>
    </div>
  );
}
