import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchProducts } from "../../api";

export const useProductsQuery = (page, limit) => {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts({ page, limit }),
    placeholderData: keepPreviousData,
  });
};
