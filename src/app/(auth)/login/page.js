"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { REGISTER_ROUTE } from "@/app/constants/routes";
import Logo from "@/app/components/Logo";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/auth/authAction";
import { useSelector } from "react-redux";
import Spinner from "@/app/components/Spinner";
import PasswordInput from "@/app/components/form/PasswordInput";

const loginPage = () => {
  const { register, handleSubmit } = useForm();
  const { loading, error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function submitForm(data) {
    dispatch(loginUser(data));
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    console.log(error);
  }, [error]);

  return (
    <div className="flex mt-23 items-center justify-center w-full px-4">
      <div className="flex  w-full flex-col max-w-96 gap-5">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>

          <p className="mt-4 text-base text-gray-500/90">
            Please enter email and password to access.
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

          <div className="mt-6">
            <label className="font-medium">Password</label>

            <PasswordInput {...register("password")} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" flex items-center justify-center gap-3 mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:opacity-80"
          >
            login{loading && <Spinner className=" fill primary" />}
          </button>

          <p className="text-center py-8">
            Don't have an account?{" "}
            <Link
              href={REGISTER_ROUTE}
              className="text-indigo-600 hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default loginPage;
