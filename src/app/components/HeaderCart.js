import React from "react";
import Link from "next/link";
import { CART_ROUTE } from "../constants/routes";

import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
const HeaderCart = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <>
      {/* Shopping cart */}
      <Link
        href={CART_ROUTE}
        className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary relative"
      >
        <TiShoppingCart />
        <span className="absolute top-0 right-0 bg-red-600 text-white text-[8px] h-3 w-3 rounded-full flex items-center justify-center">
          {products.length}
        </span>
      </Link>
    </>
  );
};

export default HeaderCart;
