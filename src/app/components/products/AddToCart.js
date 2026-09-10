"use client";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
import { toast } from "react-toastify";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  function AddProductToCart() {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  }
  return (
    <button
      onClick={AddProductToCart}
      className="min-w-10 text-lg h-10 bg-primary text-white hover:bg-secondary px-2.5 py-2 rounded-full cursor-pointer px-3 "
    >
      <MdOutlineAddShoppingCart />
    </button>
  );
};

export default AddToCart;
