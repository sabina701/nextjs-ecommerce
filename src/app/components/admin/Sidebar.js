"use client";

import React from "react";
import Logo from "../Logo";
import sidebarLinks from "@/app/constants/sidebar";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 pt-14 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 shadow"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto shadow dark:bg-gray-950">
          <div className="px-2.5 py-3">
            {" "}
            <Logo />
          </div>

          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((item) => {
              const isActive = pathName.startsWith(item.route);

              return (
                <li key={item.route}>
                  <Link
                    href={item.route}
                    className={`${
                      isActive ? "bg-primary/10 text-primary" : ""
                    } flex items-center px-2 py-1.5 text-gray-600 dark:text-gray-300 rounded-md dark:hover:bg-gray-800 hover:bg-gray-100 group`}
                  >
                    <item.Icon />

                    <span className="ms-3">{item.label}</span>
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                href="#"
                className="flex items-center px-2 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white w-full"
              >
                <FaSignOutAlt />

                <span className="ms-3 whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
