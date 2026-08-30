import React from "react";
import Banner from "../components/products/Banner";

const layout = ({ children }) => {
  return (
    <section className="py-10">
      <div>
        <Banner />

        <div className="container mx-auto px-6">{children}</div>
      </div>
    </section>
  );
};

export default layout;
