import React, { useState } from "react";
import Modal from "../Modal";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import config from "@/app/config/config";
import { confirmPayment, payViaStripe } from "@/api/orders";

import { toast } from "react-toastify";

const CheckOutForm = ({ id }) => {
  const [show, setShow] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  async function initPaymentViaStripe() {
    try {
      const data = await payViaStripe(id);

      console.log("PAYMENT INTENT:", data);

      const clientSecret = data.client_secret;

      console.log("CLIENT SECRET:", clientSecret);

      if (!stripe || !elements) {
        console.log("Stripe or Elements is not ready");
        return;
      }

      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        console.log("CardElement not found");
        return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      console.log("STRIPE RESULT:", result);

      if (result.error) {
        console.log("STRIPE ERROR:", result.error);
        toast.error(result.error.message);
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        await confirmPayment(id, "Completed");
        setShow(false);
        toast.success("Payment successful");
        return;
      }

      toast.error("Payment failed");
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("RESPONSE:", error.response?.data);
      console.log("FULL ERROR:", error);
      toast.error("Payment failed");
    }
  }
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2"
      >
        Pay Via Stripe
      </button>
      <Modal
        show={show}
        setShow={setShow}
        title={"Card Payment"}
        onConfirm={initPaymentViaStripe}
      >
        <div className="my-10 border border-gray-300 rounded-lg px-3 py-2 ">
          {" "}
          <CardElement />
        </div>
      </Modal>
    </>
  );
};

const PayViaStripe = ({ id }) => {
  const stripePromise = loadStripe(config.stripeKey);
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm id={id} />
    </Elements>
  );
};

export default PayViaStripe;
