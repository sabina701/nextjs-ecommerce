import { PRODUCTS_ROUTE } from "@/app/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecommendedProductCard = ({ id, image, name, category }) => {
  return (
    <Link
      href={`${PRODUCTS_ROUTE}/${id}`}
      className="flex items-center group gap-3 mt-4 justify-start p-5 bg-white border-gray-300 border border-rounded-lg"
    >
      <Image
        src={image}
        height={200}
        width={200}
        alt={name}
        className="h-20 w-20 object-contain rounded-lg"
      />
      <div>
        <h4 className="font-semibold hover:underline">{name}</h4>
        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium teprimary inset-ring inset-ring-primary/30">
          {category}
        </span>
      </div>
    </Link>
  );
};

export default RecommendedProductCard;
