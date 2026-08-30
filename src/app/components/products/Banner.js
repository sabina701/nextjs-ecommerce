import React from "react";
import { FaGift } from "react-icons/fa";
import banner from "@/app/assets/images/productBanner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="pb-14">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden text-white px-10 bg-linear-to-r from-primary/70 to-secondary/70 w-full h-52 rounded-2xl shadow-sm">
          <Image
            src={banner}
            alt="banner"
            height={600}
            width={900}
            className="w-full absolute bottom-0 left-0 -z-1"
          />
          <div className="flex items-center justify-between max-w-6xl h-full mx-auto">
            <div className="flex flex-col justify-center items-start">
              <span>Black Friday Sale</span>
              <h2 className="text-5xl font-semibold mb-3">
                20% off every product
              </h2>
              <button className="bg-white rounded-lg px-5 text-black">
                Buy Now
              </button>
            </div>
            <div className="px-10">
              <FaGift className="text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
