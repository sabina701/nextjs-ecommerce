"use client";
import React from "react";
import navlinks from "../constants/navlink";
import { usePathname } from "next/navigation";
import { HOME_ROUTE } from "../constants/routes";
import Link from "next/link";

const Navlink = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-5">
      {navlinks.map((navlink) => {
        const isActive =
          pathname === navlink.route ||
          (navlink.route !== HOME_ROUTE && pathname.startsWith(navlink.route));

        return (
          <Link
            key={navlink.route}
            href={navlink.route}
            className={`font-medium hover:text-primary ${
              isActive ? "text-primary" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {navlink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navlink;
