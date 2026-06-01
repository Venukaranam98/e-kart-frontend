import { apiClient } from "../../../lib/apiClient";

export const fetchProducts = async ({ page = 1, limit = 10 }) => {
  return await apiClient(`products?page=${page}&limit=${limit}`);
};
