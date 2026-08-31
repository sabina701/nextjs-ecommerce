import React from "react";
import Logo from "./Logo";
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
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow dark:bg-gray-900">
        <div className="container mx-auto py-3 px-4">
          <div className="flex  fixeditems-center justify-between">
            {/* Logo */}
            <Logo />

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
