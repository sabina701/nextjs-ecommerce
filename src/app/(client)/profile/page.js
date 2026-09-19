"use client";
import Spinner from "@/app/components/Spinner";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { updateUser } from "@/api/user";
import { setUser } from "@/redux/auth/authSlice";
import ProfileImage from "@/app/components/profile/Image";
const profilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    values: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      street: user.address.street,
      city: user.address.city,
      province: user.address.province,
    },
  });
  const dispatch = useDispatch();
  function submitForm(data) {
    setLoading(true);
    updateUser(user._id, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: {
        city: data.city,
        province: data.province,
        street: data.street,
      },
    })
      .then((data) => {
        console.log(data);
        dispatch(setUser(data));
        toast.success("User update successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User update failed");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          General Information
        </h2>
        <ProfileImage />

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Full Name
              </label>

              <input
                type="text"
                {...register("name")}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>

              <input
                type="email"
                {...register("email")}
                disabled
                id="email"
                className="bg-gray-50 border disabled:bg-gray-100 dark:disabled:bg-gray-500 disabled:text-gray-600 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="John@gmail.com"
                value={"test@gmail.com"}
                required
              />
            </div>

            {/* phone number*/}
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="9869574216"
                required
                {...register("phone")}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="street"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address Street
              </label>

              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Kabir Tole"
                {...register("street")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>

              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Dharan"
                required
                {...register("city")}
              />
            </div>

            {/* Province */}
            <div className="w-full">
              <label
                htmlFor="province"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Province
              </label>

              <select
                {...register("province")}
                id="province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select Province</option>

                <option value="koshi">Koshi</option>
                <option value="bagmati">Bagmati</option>
                <option value="gandaki">Gandaki</option>
                <option value="madhesi">Madhesi</option>
                <option value="lumbini">Lumbini</option>
                <option value="sudur-paschim">Sudur-Paschim</option>
                <option value="karnali">Karnali</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex gap-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary hover:bg-blue-800"
          >
            Update Profile
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default profilePage;
