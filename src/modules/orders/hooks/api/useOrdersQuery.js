import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/orders.api";

export const ORDERS_QUERY_KEY = ["orders"];

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ORDERS_QUERY_KEY,
    queryFn: getOrders,
    select: (response) => {
      // The backend returns the orders array directly in the GET /orders route (unlike the typical { success, data } wrapper)
      // So we just return the array directly.
      return Array.isArray(response) ? response : [];
    },
  });
};
