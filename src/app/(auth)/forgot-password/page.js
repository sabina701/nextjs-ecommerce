"use client";
import React, { useState } from "react";

import Logo from "@/app/components/Logo";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { LOGIN_ROUTE } from "@/app/constants/routes";
import { forgotPassword } from "@/api/auth";
import Spinner from "@/app/components/Spinner";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  function submitForm(data) {
    setLoading(true);
    forgotPassword(data)
      .then(() => {
        reset();
        toast.success("Reset password link has been sent successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Reset password link sending failed");
      })
      .finally(() => setLoading(false));

    console.log(data);
  }
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  //   console.log(error);
  // }, [error]);

  return (
    <div className="flex mt-23 items-center justify-center w-full px-4">
      <div className="flex  w-full flex-col max-w-96 gap-5">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900">
            Forgot Password
          </h2>

          <p className="mt-4 text-base text-gray-500/90">
            Please enter email to receive reset password link
          </p>

          <div className="mt-10">
            <label className="font-medium">Email</label>

            <input
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" flex items-center justify-center gap-3 mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:opacity-80"
          >
            Send Reset Password Link
            {loading && <Spinner className=" fill primary" />}
          </button>

          <p className="text-center py-8">
            Go Back to
            <Link
              href={LOGIN_ROUTE}
              className="text-indigo-600 hover:underline ml-2"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
