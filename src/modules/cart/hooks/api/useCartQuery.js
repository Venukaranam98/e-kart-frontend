import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api/cart.api";
import { useAuthStore } from "../../../auth/store/useAuthStore";

export const CART_QUERY_KEY = ["cart"];

export const useCartQuery = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: getCart,
    select: (response) => response?.data || [],
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};

