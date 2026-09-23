"use client";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
import { toast } from "react-toastify";
const AddToCart = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  function AddProductToCart() {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  }
  return (
    <button
      onClick={AddProductToCart}
      className="w-full flex items-center justify-center py-2.5 px-5 text-sm font-medium  focus:outline-none bg-primary rounded-lg border border-gray-200 text-white hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 gap-2"
    >
      <MdOutlineAddShoppingCart />
      Add to cart
    </button>
  );
};

export default AddToCart;
