"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS_ROUTE } from "../constants/routes";
import {
  FaArrowRight,
  FaImage,
  FaMinus,
  FaPlus,
  FaRegHeart,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import { toast } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  // Corrected selector syntax
  const { products, totalPrice } = useSelector((state) => state.cart);
  function remove(product) {
    if (confirm("Are you sure?")) {
      dispatch(removeFromCart(product));
    }
    toast.success(`${product.name} deleted successfully`);
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Your Cart Items
        </h2>
        {products.length == 0 ? (
          <p>No Items added to cart</p>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {/* Cart Products List */}
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {products?.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link
                        href={`${PRODUCTS_ROUTE}/${product.id}`}
                        className="shrink-0 md:order-1"
                      >
                        {product.imageUrls[0] ? (
                          <Image
                            className="h-20 w-20 object-contain "
                            src={product.imageUrls[0]}
                            height={200}
                            width={200}
                            alt={product.name}
                          />
                        ) : (
                          <FaImage className="h-20 w-20 text-gray-400" />
                        )}
                      </Link>

                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => dispatch(decreaseQuantity(product))}
                            disabled={product.quantity == 1}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaMinus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            value={product.quantity || 1}
                            disabled
                          />
                          <button
                            type="button"
                            onClick={() => dispatch(increaseQuantity(product))}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaPlus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                        </div>

                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            Rs. {product.price * product.quantity}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link
                          href={`${PRODUCTS_ROUTE}/${product.id}`}
                          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          {product.name}
                        </Link>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <FaRegHeart />
                            Add to Favorites
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(product)}
                            className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <FaXmark />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs.{totalPrice * 0.9}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        Rs.{totalPrice * 0.1}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs.200
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs.{totalPrice * 0.13}
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      Rs. {Math.ceil(totalPrice * 1.13) + 200}
                    </dd>
                  </dl>
                </div>

                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary/30  dark:hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <Link
                  href={PRODUCTS_ROUTE}
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
