import { apiClient } from "../../../lib/apiClient";

export const fetchProducts = async ({ page = 1, limit = 10, category = "" }) => {
  let url = `products?page=${page}&limit=${limit}`;
  if (category && category !== "All") {
    url += `&category=${encodeURIComponent(category)}`;
  }
  return await apiClient(url);
};

