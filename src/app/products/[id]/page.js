import axios from "axios";
import React from "react";
import config from "@/app/config/config";
async function fetchById(id) {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return response.data;
}
export const generateMetadata = async ({ params }) => {
  const id = (await params).id;
  const product = await fetchById(id);
  return {
    title: product?.name,
  };
};

const productById = async ({ params }) => {
  const id = (await params).id;
  const product = await fetchById(id);
  return (
    <>
      {" "}
      <h1 className="text-5xl">{product.name}</h1>
      <p>Brand:{product.brand}</p>
      <p>Category:{product.category}</p>
      <p className="text-3xl">Price:Rs.{product.price}</p>
    </>
  );
};

export default productById;
