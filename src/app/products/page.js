import React from "react";

import Card from "../components/products/Card";
import ProductsFilter from "../components/products/Filter";
import { getProducts } from "@/api/product";

export const metadata = {
  title: "Products | Techno",
};

const productsPage = async ({ searchParams }) => {
  const products = await getProducts(searchParams);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
      <ProductsFilter />
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
    </section>
  );
};

export default productsPage;
