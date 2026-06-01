import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addToCart, updateCartItem, removeFromCart } from "../../api/cart.api";
import { CART_QUERY_KEY } from "./useCartQuery";

export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, quantity }) => addToCart(productId, quantity),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
      toast.success(data?.message || "Item added to cart");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to add item to cart");
    },
  });
};

export const useUpdateCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cartItemId, quantity }) => updateCartItem(cartItemId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update quantity");
    },
  });
};

export const useRemoveFromCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cartItemId) => removeFromCart(cartItemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
      toast.success("Item removed from cart");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to remove item");
    },
  });
};
