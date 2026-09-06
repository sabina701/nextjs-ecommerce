"use client";
import { LOGIN_ROUTE } from "@/app/constants/routes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Adminlayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user]);
  if (user) return <div>{children}</div>;
  return;
};

export default Adminlayout;
