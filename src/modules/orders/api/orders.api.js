import { apiClient } from "../../../lib/apiClient";

export const checkout = async () => {
  return await apiClient("/checkout", {
    method: "POST",
  });
};

export const getOrders = async () => {
  return await apiClient("/orders", {
    method: "GET",
  });
};

export const cancelOrder = async (orderId) => {
  return await apiClient(`/orders/${orderId}/cancel`, {
    method: "POST",
  });
};
