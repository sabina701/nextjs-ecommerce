"use client";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "@/app/constants/routes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import { ROLE_ADMIN, ROLE_MERCHANT } from "@/app/constants/roles";

const Adminlayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
    const adminRoles = [ROLE_ADMIN, ROLE_MERCHANT];
    if (!user.roles.some((role) => adminRoles.includes(role))) {
      router.push(DASHBOARD_ROUTE);
    }
  }, [user]);
  if (user) return <div>{children}</div>;
  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default Adminlayout;
