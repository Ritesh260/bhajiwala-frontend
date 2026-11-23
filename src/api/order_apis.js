
import api from "./axios";

// POST: Place new order
export const placeOrder = async (orderData) => {
  const { data } = await api.post(
    "/user/orders/place",
    orderData
  );

  return data;
};

// GET: Customer's all orders
export const getMyOrders = async () => {
  const { data } = await api.get("/user/orders/my");
  return data;
};

// GET: Single order details
export const getOrderById = async (orderId) => {
  const { data } = await api.get(
    `/user/orders/${orderId}`
  );

  return data;
};

// PATCH: Cancel order
export const cancelOrder = async (orderId, cancelData = {}) => {
  const { data } = await api.patch(
    `/user/orders/${orderId}/cancel`,
    cancelData
  );

  return data;
};

// GET: Order tracking
export const getOrderTracking = async (orderId) => {
  const { data } = await api.get(
    `/user/orders/${orderId}`
  );

  return data;
};
