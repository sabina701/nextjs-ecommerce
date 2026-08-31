import React from "react";
import config from "../config/config";
import { FaLaptop } from "react-icons/fa";
import Link from "next/link";
import { HOME_ROUTE } from "../constants/routes";

const Logo = () => {
  return (
    <h1 className="text-xl font-semibold text-primary">
      <Link href={HOME_ROUTE} className="flex items-center gap-2">
        <FaLaptop />
        {config.appName}
      </Link>
    </h1>
  );
};

export default Logo;
