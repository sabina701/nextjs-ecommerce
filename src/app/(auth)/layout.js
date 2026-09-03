"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import bg from "@/app/assets/images/auth-bg.jpg";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "../constants/routes";

const AuthLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push(HOME_ROUTE);
    }
  }, [user, router]);
  return (
    <section className="relative min-h-screen py-16">
      <Image src={bg} alt="" fill className="object-cover" />

      <div className="container relative z-10 mx-auto px-6">{children}</div>
    </section>
  );
};

export default AuthLayout;
