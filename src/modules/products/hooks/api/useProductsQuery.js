import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchProducts } from "../../api";

export const useProductsQuery = (page, limit, category = "") => {
  return useQuery({
    queryKey: ["products", page, limit, category],
    queryFn: () => fetchProducts({ page, limit, category }),
    placeholderData: keepPreviousData,
  });
};

