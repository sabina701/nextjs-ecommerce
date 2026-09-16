"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import OrderTable from "@/app/components/admin/orders/Table";
import { getAllOrders } from "@/api/orders";

import { ORDER_STATUS_PENDING } from "@/app/constants/order";
import { ORDER_STATUS_SHIPPED } from "@/app/constants/order";
import { ORDER_STATUS_CANCELLED } from "@/app/constants/order";
import { ORDER_STATUS_CONFIRMED } from "@/app/constants/order";
import { ORDER_STATUS_DELIVERED } from "@/app/constants/order";
const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllOrders(selectedStatus)
      .then((data) => setOrders(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [selectedStatus]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 ">
      {/* Start coding here */}
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          {/* Buttons */}
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span> Filter by Status:</span>
              <select
                onChange={(e) => setSelectedStatus(e.target.value)}
                name="status"
                id="status"
                className=" border rounded-md py-2 px-3 border-gray-300 dark:border-gray-600"
              >
                <option value="All">All</option>
                <option value={ORDER_STATUS_PENDING}>
                  {ORDER_STATUS_PENDING}
                </option>
                <option value={ORDER_STATUS_CONFIRMED}>
                  {ORDER_STATUS_CONFIRMED}
                </option>
                <option value={ORDER_STATUS_SHIPPED}>
                  {ORDER_STATUS_SHIPPED}
                </option>
                <option value={ORDER_STATUS_DELIVERED}>
                  {ORDER_STATUS_DELIVERED}
                </option>
                <option value={ORDER_STATUS_CANCELLED}>
                  {ORDER_STATUS_CANCELLED}
                </option>
              </select>

              <div
                id="filterDropdown"
                className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Choose brand
                </h6>

                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="filterDropdownButton"
                >
                  <li className="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="apple"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Apple (56)
                    </label>
                  </li>

                  <li className="flex items-center">
                    <input
                      id="fitbit"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="fitbit"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Microsoft (16)
                    </label>
                  </li>

                  <li className="flex items-center">
                    <input
                      id="razor"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="razor"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Razor (49)
                    </label>
                  </li>

                  <li className="flex items-center">
                    <input
                      id="nikon"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="nikon"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Nikon (12)
                    </label>
                  </li>

                  <li className="flex items-center">
                    <input
                      id="benq"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="benq"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      BenQ (74)
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <OrderTable loading={loading} orders={orders} />
      </div>
    </section>
  );
};

export default OrderManagementPage;
