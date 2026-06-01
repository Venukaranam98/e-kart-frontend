import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../cart/store/useCartStore";

export const useCheckoutMutation = () => {
  const navigate = useNavigate();
  const closeDrawer = useCartStore((state) => state.closeDrawer);

  return {
    mutate: () => {
      closeDrawer();
      navigate("/address");
    },
    isPending: false,
  };
};