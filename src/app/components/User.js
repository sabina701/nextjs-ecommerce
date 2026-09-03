"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { LOGIN_ROUTE } from "../constants/routes";
import { logout } from "@/redux/auth/authSlice";
const User = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  if (!user)
    return (
      <Link
        href={LOGIN_ROUTE}
        className="text-white bg-primary rounded-lg px-6 py-2 h-9 flex items-center"
      >
        Login
      </Link>
    );
  return (
    <div className="relative">
      <button
        className="text-gray-700 border-2 rounded-full h-9 min-w-9 flex items-center justify-center px-2 py-1 dark:text-gray-300 hover:text-primary cursor-pointer"
        onClick={() => setShow(true)}
      >
        <FaUser />
      </button>
      {show && (
        <>
          <div
            onClick={() => setShow(false)}
            className="fixed top-0  left-0 bottom-0 right-0 z-10"
          >
            <div
              onClick={() => setShow(false)}
              className="absolute top-15 bg-white right-20 shadow rounded-md dark:bg-gray-800"
            >
              <div className="border-b border-gray-300 p-4 dark:border-gray-700">
                <h4 className="text-gray-800 dark:text-white text-lg">
                  {user.name}
                </h4>
                <p className="text-primary">{user.email}</p>
              </div>
              <div className="flex flex-col py-2">
                <Link
                  href={""}
                  className="py-1 px-4 text-gray-700 dark:text-gray-400 dark:hover-bg-gray-700 hover:bg-gray-200"
                >
                  Dashboard
                </Link>
                <Link
                  href={""}
                  className="py-1 px-4 text-gray-700 dark:text-gray-400 dark:hover-bg-gray-700 hover:bg-gray-200"
                >
                  Profile
                </Link>
                <Link
                  href={""}
                  onClick={() => dispatch(logout())}
                  className="py-1 px-4 text-red-600  dark:text-gray-100 dark:hover:bg-red-700 hover:bg-red-200 text-left cursor-pointer"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
