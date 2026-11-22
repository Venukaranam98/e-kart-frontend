import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "./api";
import { useAuthStore } from "../../auth/store/useAuthStore";

export const WISHLIST_QUERY_KEY = ["wishlist"];

export const useWishlistQuery = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return useQuery({
        queryKey: WISHLIST_QUERY_KEY,
        queryFn: getWishlist,
        select: (response) => response?.data || [],
        staleTime: 1000 * 60 * 5,
        enabled: isAuthenticated,
    });
};
