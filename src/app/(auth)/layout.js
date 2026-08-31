import Image from "next/image";
import React from "react";
import bg from "@/app/assets/images/auth-bg.jpg";

const AuthLayout = ({ children }) => {
  return (
    <section className="relative min-h-screen py-16">
      <Image src={bg} alt="" fill className="object-cover" />

      <div className="container relative z-10 mx-auto px-6">{children}</div>
    </section>
  );
};

export default AuthLayout;
