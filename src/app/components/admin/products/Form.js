"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { addProduct } from "@/api/product";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "../../Spinner";

const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onDrop = useCallback((acceptedFiles) => {
    setImageFiles(acceptedFiles);
    const images = acceptedFiles.map((file) => ({
      ...file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setSelectedImages(images);
  }, []);
  function removeImages(index) {
    setSelectedImages((prev) => prev.filter((_, i) => i != index));
    setImageFiles((prev) => prev.filter((_, i) => i != index));
  }

  function submitForm(data) {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("brand", data.brand);
    formdata.append("category", data.category);
    formdata.append("price", data.price);
    formdata.append("stock", data.stock ?? 1);

    if (data.description) formdata.append("description", data.description);
    if (imageFiles.length > 0) {
      imageFiles.map((file) => formdata.append("images", file));
    }
    addProduct(formdata)
      .then((data) => {
        toast.success("Product created successfully");
        router.back();
      })
      .catch((error) => toast.error(error.response?.data?.message))
      .finally(() => setLoading(false));
  }
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Product Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name*
          </label>

          <input
            type="text"
            id="name"
            className="bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
            placeholder="Type product name"
            {...register("name")}
            required
          />
        </div>

        {/* Brand */}
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand*
          </label>

          <input
            type="text"
            id="brand"
            className="bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>

        {/* Price */}
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price*
          </label>

          <input
            type="number"
            id="price"
            className="bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
            placeholder="Rs.10000"
            required
            {...register("price")}
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category*
          </label>

          <input
            type="text"
            id="category"
            className="bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
            placeholder="Product Category"
            required
            {...register("category")}
          />
        </div>

        {/* Item Weight */}
        <div>
          <label
            htmlFor="item-weight"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            stock
          </label>

          <input
            type="number"
            id="stock"
            className="bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
            placeholder="10"
            {...register("stock")}
          />
        </div>

        {/* Drop and down image */}

        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Images
          </label>
          <div className="flex items-center justify-center w-full">
            <div
              {...getRootProps()}
              className="flex flex-col items-center justify-center rounded-lg w-full  bg-neutral-secondary-medium rounded-base cursor-pointer hover:bg-gray-50  bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center text-body py-10">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>

                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>

                <p className="text-xs">.png,.jpg,.jpeg(Max 5MB)</p>
              </div>

              <input
                {...getInputProps({ accept: ".png,.jpg,.jpeg" })}
                className="hidden"
              />
            </div>
          </div>

          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 flex items-center gap-4 mt-2"
            >
              <Image
                src={image.url}
                alt={image.name}
                height={100}
                width={100}
                className="h-16 w-16  object-contain"
              />
              <h4 className="font-semibold flex-1">{image.name}</h4>
              <button
                className="p-2 bg-red-500 text-white rounded cursor-pointer"
                type="button"
                onClick={() => removeImages(index)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>

          <textarea
            id="description"
            rows="8"
            className="bg-gray-50 focus:ring-1 focus:ring-primary/20 outline-primary border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
            placeholder="Your description here"
            defaultValue={""}
            {...register("description")}
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex disabled:opacity-80 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800/ cursor-pointer"
      >
        <span className="mr-2">Add product</span>
        {loading ? <Spinner className="h-5 w-5 fill-primary" /> : <FaPlus />}
      </button>
    </form>
  );
};

export default ProductForm;
