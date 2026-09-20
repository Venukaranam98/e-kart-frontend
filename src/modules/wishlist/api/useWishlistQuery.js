import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "./api";

export const WISHLIST_QUERY_KEY = ["wishlist"];

export const useWishlistQuery = () => {
    const hasToken = !!localStorage.getItem("access_token");
    return useQuery({
        queryKey: WISHLIST_QUERY_KEY,
        queryFn: getWishlist,
        select: (response) => response?.data || [],
        staleTime: 1000 * 60 * 5,
        enabled: hasToken,
    });
};