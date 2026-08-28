import React from "react";
import Banner from "../components/products/Banner";

const layout = ({ children }) => {
  return (
    <div>
      <Banner />
      <section className="py-16">
        <div className="container mx-auto px-6">{children}</div>
      </section>
    </div>
  );
};

export default layout;
