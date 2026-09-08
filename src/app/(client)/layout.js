"use client";
import { LOGIN_ROUTE } from "@/app/constants/routes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import Sidebar from "@/app/components/admin/Sidebar";

const Clientlayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user]);
  if (user)
    return (
      <div>
        <Sidebar />
        <div className="p-6 sm:ml-64"> {children}</div>
      </div>
    );
  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default Clientlayout;
