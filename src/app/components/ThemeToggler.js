"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary cursor-pointer"
    >
      <FaMoon className="dark:hidden" />
      <FaSun className="hidden dark:block" />
    </button>
  );
};

export default ThemeToggler;
