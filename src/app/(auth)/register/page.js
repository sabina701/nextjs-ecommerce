"use client";
import { LOGIN_ROUTE } from "@/app/constants/routes";
import React, { useEffect } from "react";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Spinner from "@/app/components/Spinner";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/auth/authAction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import PasswordInput from "@/app/components/form/PasswordInput";

const registerPage = () => {
  const { register, handleSubmit } = useForm();
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  async function submitForm(data) {
    dispatch(registerUser(data));
  }

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);
  return (
    <div className="flex mt-20 items-center justify-center w-full px-4">
      <div className="flex  w-full flex-col max-w-96 ">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900">Sign up</h2>

          <p className=" text-base text-gray-500/90 mt-2">
            Please enter your details to register
          </p>

          <div className="mt-6">
            <label className="font-medium">Name</label>

            <input
              placeholder="Please enter your full name"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
              required
              type="text"
              {...register("name")}
            />
          </div>

          <div className="mt-6">
            <label className="font-medium">Email</label>

            <input
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>

          <div className="mt-6">
            <label className="font-medium">Phone number</label>

            <input
              placeholder="Please enter your phone number"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
              required
              type="tel"
              {...register("phone")}
            />
          </div>

          <div className="mt-6">
            <label className="font-medium">Address</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                placeholder="Please enter city"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("city")}
              />
              <input
                placeholder="Enter province"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("province")}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="font-medium">Password</label>

            <PasswordInput {...register("password")} />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-3 disabled:opacity-80 mt-5 py-2 md:mt-2 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
          >
            Register{loading && <Spinner className=" fill primary" />}
          </button>

          <p className="text-center py-8">
            Already have an account?{" "}
            <Link
              href={LOGIN_ROUTE}
              className="text-indigo-600 hover:underline ml-2"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default registerPage;
