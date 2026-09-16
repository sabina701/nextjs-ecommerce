import { payViaCash } from "@/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/app/constants/order";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const CashOnDelivery = ({ id }) => {
  const router = useRouter();
  function confirmOrder() {
    if (confirm("Are you sure?")) {
      payViaCash(id)
        .then(() => {
          toast.success("Order update success");
          router.push(`?status=${ORDER_STATUS_CONFIRMED}`);
        })
        .catch((error) => {
          console.log(error);
          toast.error("order update failed");
        });
    }
  }
  return (
    <button
      onClick={confirmOrder}
      className="bg-green-700 hover:bg-green-800 text-white rounded-md px-4 py-2"
    >
      Cash on Delivery
    </button>
  );
};

export default CashOnDelivery;
