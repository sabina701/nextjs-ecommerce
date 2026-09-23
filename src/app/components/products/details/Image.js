"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImage = ({ images }) => {
  const [image, setImage] = useState(images[0]);
  return (
    <div className="">
      <div className="flex justify-center ">
        <Image
          className="w-auto h-100 "
          src={image}
          alt=""
          height={800}
          width={1200}
        />
      </div>
      <div className="flex items-center justify-center gap-5 h-28 mt-5   ">
        {images.map((item, index) => (
          <Image
            key={index}
            className={`${item == image ? "border-primary" : "border-gray-300"} h-28 w-28 border-2 p-2 rounded-lg object-contain`}
            src={item}
            onClick={() => setImage(item)}
            alt=""
            height={800}
            width={1200}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
