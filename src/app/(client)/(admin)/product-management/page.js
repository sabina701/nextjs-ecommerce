import { getProducts } from "@/api/product";
import Pagination from "@/app/components/admin/products/Pagination";
import ProductsTable from "@/app/components/admin/products/Table";
import Link from "next/link";
import React from "react";
import { FaUpload } from "react-icons/fa";

const ProductManagementPage = async ({ searchParams }) => {
  const product = await getProducts(searchParams);

  return (
    <section className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div>
        <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <div className="flex items-center flex-1 space-x-4">
            <h5>
              <span className="text-gray-500">All Products:</span>
              <span className="dark:text-white">123456</span>
            </h5>
            <h5>
              <span className="text-gray-500">Total sales:</span>
              <span className="dark:text-white">$88.4k</span>
            </h5>
          </div>
          <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add new product
            </button>
            <Link
              href="/product-management/add"
              className="bg-primary px-6 py-2 rounded-md text-white"
            >
              {" "}
              Add Product
            </Link>
            <button
              type="button"
              className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <FaUpload />
              Export
            </button>
          </div>
        </div>
        <ProductsTable product={product} />
        <Pagination />
      </div>
    </section>
  );
};

export default ProductManagementPage;
