"use client";
import { getOrdersByUser } from "@/api/orders";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OrderCard from "../components/orders/card";
const orderPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrdersByUser()
      .then((data) => {
        console.log("ORDERS FROM API:", data);
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response.data);
      });
  }, []);

  return (
    <section className="py-16 relative">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-16 ">
          Your Orders
        </h2>
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default orderPage;
