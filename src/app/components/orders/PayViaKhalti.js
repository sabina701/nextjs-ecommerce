import React, { useState } from "react";
import { payViaKhalti } from "@/api/orders";
import Spinner from "../Spinner";
const PayViaKhalti = ({ id }) => {
  const [loading, setLoading] = useState(false);

  const initOrderPayment = () => {
    setLoading(true);
    payViaKhalti(id)
      .then((data) => {
        console.log(data);
        window.location.href = data.payment_url;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Order Payment failed");
      })
      .finally(() => setLoading(false));
  };
  return (
    <button
      onClick={initOrderPayment}
      className="bg-purple-900 flex items-center gap-2 hover:bg-violet-900 text-white rounded-md px-4 py-2 "
    >
      {loading && <Spinner className="h-5 w-5 fill-purple-900" />}
      Pay Via Khalti
    </button>
  );
};

export default PayViaKhalti;
