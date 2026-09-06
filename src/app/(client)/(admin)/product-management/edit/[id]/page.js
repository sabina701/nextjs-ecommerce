import Link from "next/link";
import React from "react";

const updateProductsPage = () => {
  return (
    <div>
      <h4>ProductManagementPage</h4>
      <Link href="/product-management/add">Add Product</Link>
    </div>
  );
};

export default updateProductsPage;
