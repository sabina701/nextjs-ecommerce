import api from "@/api/index";

export const getOrdersByUser = async () => {
  const response = await api.get(`/api/orders/user`);
  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post("/api/orders", data);
  return response.data;
};

export const cancelOrder = async (id) => {
  const response = await api.put(`/api/orders/${id}/cancel`);
  return response.data;
};
