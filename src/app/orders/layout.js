"use client";
import { LOGIN_ROUTE } from "@/app/constants/routes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";

const orderlayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user]);
  if (user) return <> {children}</>;
  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default orderlayout;
