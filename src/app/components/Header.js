import React from "react";
import Logo from "./Logo";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import Navlink from "./Navlink";
import ThemeToggler from "./ThemeToggler";
import User from "./User";
const Header = () => {
  return (
    <div>
      <header className="sticky top-0 left-0 z-50 w-full bg-white shadow dark:bg-gray-950">
        <div className="container mx-auto py-3 px-4">
          <div className="flex  fixeditems-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Navbar */}
            <Navlink />

            {/* Right-side buttons */}
            <div className="flex items-center gap-2">
              {/* Dark mode */}
              <ThemeToggler />

              {/* Shopping cart */}
              <button className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary">
                <FaShoppingCart />
              </button>

              {/* User */}
              <User />

              {/* Mobile menu */}
              <button className="block md:hidden text-gray-700 px-2 py-1 dark:text-gray-300">
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
