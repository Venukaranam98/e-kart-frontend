import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductsQuery } from "./api/useProductsQuery";

export const useProducts = (initialLimit = 10) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const categoryFilter = searchParams.get("category") || "";

  useEffect(() => {
    setPage(1);
  }, [categoryFilter, searchQuery]);

  const {
    data,
    isLoading,
    isError,
    error,
    isPlaceholderData,
  } = useProductsQuery(page, limit, categoryFilter);


  const products = useMemo(() => data?.data || [], [data?.data]);

  const meta = data?.meta || {};

  const totalPages = meta.total
    ? Math.ceil(meta.total / limit)
    : null;

  const hasNextPage = totalPages
    ? page < totalPages
    : products.length === limit;

  const filteredProducts = useMemo(() => {
    let result = products;

    if (categoryFilter && categoryFilter !== "All") {
      result = result.filter(
        (product) =>
          product.category?.toLowerCase() ===
          categoryFilter.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();

      result = result.filter(
        (product) =>
          product.title?.toLowerCase().includes(lowerQuery) ||
          product.description?.toLowerCase().includes(lowerQuery) ||
          product.category?.toLowerCase().includes(lowerQuery)
      );
    }

    return result;
  }, [products, searchQuery, categoryFilter]);

  const nextPage = () => {
    if (!isPlaceholderData && hasNextPage) {
      setPage((old) => old + 1);
    }
  };

  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 1));
  };

  return {
    products,
    filteredProducts,
    page,
    limit,
    setLimit,
    searchQuery,
    isLoading,
    isError,
    error,
    isPlaceholderData,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage: page > 1,
  };
};