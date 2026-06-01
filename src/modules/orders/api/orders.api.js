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
