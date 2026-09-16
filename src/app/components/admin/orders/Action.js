import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "../../Modal";
import { toast } from "react-toastify";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/app/constants/order";
import { updateStatus } from "@/api/orders";
const OrderAction = ({ id, status }) => {
  const [show, setShow] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status);

  function updateOrderStatus() {
    updateStatus(id, selectedStatus)
      .then(() => {
        toast.success("order status updated successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("order status updated failed  ");
      })
      .finally(() => setShow(false));
  }
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="p-2 rounded-md bg-primary text-white cursor-pointer hover:bg-blue-600"
      >
        <FaPencilAlt />
      </button>
      <Modal
        show={show}
        setShow={setShow}
        title={"Update Status"}
        onConfirm={updateOrderStatus}
      >
        <select
          defaultValue={status}
          onChange={(e) => setSelectedStatus(e.target.value)}
          name="status"
          id="status"
          className="my-5 w-full border rounded-md py-2 px-3 border-gray-300 dark:border-gray-600"
        >
          <option value={ORDER_STATUS_PENDING}>{ORDER_STATUS_PENDING}</option>
          <option value={ORDER_STATUS_CONFIRMED}>
            {ORDER_STATUS_CONFIRMED}
          </option>
          <option value={ORDER_STATUS_SHIPPED}>{ORDER_STATUS_SHIPPED}</option>
          <option value={ORDER_STATUS_DELIVERED}>
            {ORDER_STATUS_DELIVERED}
          </option>
          <option value={ORDER_STATUS_CANCELLED}>
            {ORDER_STATUS_CANCELLED}
          </option>
        </select>
      </Modal>
    </>
  );
};

export default OrderAction;
