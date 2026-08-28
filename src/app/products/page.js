import React from "react";
import config from "../config/config";
import axios from "axios";
import Card from "../components/products/Card";

export const metadata = {
  title: "Products | Techno",
};

const productsPage = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);
  const products = response.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {products.map((product) => (
        <Card
          key={product._id}
          id={product._id}
          name={product.name}
          brand={product.brand}
          category={product.category}
          price={product.price}
          imageUrls={product.imageUrls}
        />
      ))}
    </div>
  );
};

export default productsPage;
