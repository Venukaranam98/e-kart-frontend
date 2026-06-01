import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api/cart.api";

export const CART_QUERY_KEY = ["cart"];

export const useCartQuery = () => {
  return useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: getCart,
    select: (response) => response?.data || [],
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
