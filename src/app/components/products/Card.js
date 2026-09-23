import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/app/constants/routes";
import { FaImage, FaShoppingCart } from "react-icons/fa";
import productBanner from "@/app/assets/images/productBanner.jpg";
import AddToCart from "./AddToCart";

const Card = ({ id, name, price, brand, category, imageUrls }) => {
  return (
    <>
      <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
        <Link href={`${PRODUCTS_ROUTE}/${id}`} className="relative">
          {imageUrls.length > 0 ? (
            <Image
              src={imageUrls?.[0] || productBanner}
              alt={name}
              className="w-full h-48 object-cover"
              height={400}
              width={600}
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <FaImage className="text-gray-300 text-7xl" />
            </div>
          )}

          <span className="absolute top-3 right-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-xl">
            {brand}
          </span>
        </Link>

        <div className="p-4">
          <h4 className="mb-2">
            <Link
              href={`${PRODUCTS_ROUTE}/${id}`}
              className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1 hover:text-primary"
            >
              {name}
            </Link>
          </h4>

          <span className="bg-primary/10 text-primary text-xs font-medium px-1.5 py-0.5 rounded">
            {category}
          </span>

          <div className="flex mb-2 items-center">{category}</div>

          <div className="mt-2 flex justify-between items-center">
            <div>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Rs. {price}
              </span>

              <span className="text-sm text-gray-500 line-through ml-1">
                Rs. {price * 1.05}
              </span>
            </div>

            <AddToCart product={{ id, name, price, imageUrls }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
