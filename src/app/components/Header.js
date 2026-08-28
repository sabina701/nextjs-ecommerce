import React from "react";
import Link from "next/link";
import { HOME_ROUTE } from "../constants/routes";
import navlinks from "../constants/navlink";
import {
  FaBars,
  FaLaptop,
  FaMoon,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Navlink from "./Navlink";
const Header = () => {
  return (
    <div>
      <header className="w-full bg-white dark:bg-gray-900 sticky top-0 shadow z-50">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-xl font-semibold text-primary">
              <Link href={HOME_ROUTE} className="flex items-center gap-2">
                <FaLaptop />
                Techno
              </Link>
            </h1>

            {/* Navbar */}
            <Navlink />

            {/* Right-side buttons */}
            <div className="flex items-center">
              {/* Dark mode */}
              <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
                <FaMoon />
              </button>

              {/* Shopping cart */}
              <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
                <FaShoppingCart />
              </button>

              {/* User */}
              <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
                <FaUser />
              </button>

              {/* Mobile menu */}
              <button className="block md:hidden text-gray-700 p-1 dark:text-gray-300">
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
