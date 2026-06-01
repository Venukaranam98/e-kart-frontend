import { apiClient } from "../../../lib/apiClient";

export const getCart = async () => {
  return await apiClient("/cart", { method: "GET" });
};

export const addToCart = async (productId, quantity = 1) => {
  return await apiClient("/cart", {
    method: "POST",
    body: { product_id: productId, quantity },
  });
};

export const updateCartItem = async (cartItemId, quantity) => {
  return await apiClient(`/cart/${cartItemId}`, {
    method: "PUT",
    body: { quantity },
  });
};

export const removeFromCart = async (cartItemId) => {
  return await apiClient(`/cart/${cartItemId}`, {
    method: "DELETE",
  });
};
