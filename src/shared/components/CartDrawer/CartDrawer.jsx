import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import { useCartStore } from "../../../modules/cart/store/useCartStore";
import { useCartQuery } from "../../../modules/cart/hooks/api/useCartQuery";
import {
  useUpdateCartMutation,
  useRemoveFromCartMutation,
} from "../../../modules/cart/hooks/api/useCartMutations";

import * as S from "./CartDrawer.styles";

export default function CartDrawer() {
  const navigate = useNavigate();

  const { isDrawerOpen, closeDrawer } = useCartStore();

  const { data: items = [], isLoading } = useCartQuery();

  const { mutate: updateQuantity } =
    useUpdateCartMutation();

  const { mutate: removeItem } =
    useRemoveFromCartMutation();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const handleUpdateQuantity = (
    item,
    delta
  ) => {
    const newQty = Math.max(
      1,
      item.quantity + delta
    );

    updateQuantity({
      cartItemId: item.cart_id,
      quantity: newQty,
    });
  };

const handleCheckout = () => {
  closeDrawer();
  navigate("/address");
};

  const totalAmount = items.reduce(
    (sum, item) => {
      const price = item.price || 0;

      return (
        sum +
        price * item.quantity
      );
    },
    0
  );

  localStorage.setItem(
    "cart_total",
    totalAmount
  );

  return (
    <>
      <S.Overlay
        $isOpen={isDrawerOpen}
        onClick={closeDrawer}
      />

      <S.Drawer $isOpen={isDrawerOpen}>
        <S.Header>
          <h2>Your Cart</h2>

          <button onClick={closeDrawer}>
            <X size={24} />
          </button>
        </S.Header>

        {isLoading ? (
          <div
            style={{
              padding: 24,
              textAlign: "center",
              color: "var(--color-mute)",
            }}
          >
            Loading cart...
          </div>
        ) : items.length === 0 ? (
          <S.EmptyCart>
            <ShoppingBag
              size={48}
              strokeWidth={1}
            />
            <p>Your cart is empty</p>
          </S.EmptyCart>
        ) : (
          <S.CartList>
            {[...items]
              .sort(
                (a, b) =>
                  a.cart_id - b.cart_id
              )
              .map((item) => (
                <S.CartItem
                  key={item.cart_id}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={
                        item.product_title
                      }
                    />
                  ) : (
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        background:
                          "rgba(255,255,255,0.05)",
                        borderRadius: 8,
                      }}
                    />
                  )}

                  <S.ItemInfo>
                    <h4>
                      {item.product_title}
                    </h4>

                    <p>
                      {item.category}
                    </p>

                    <S.QuantityControls>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item,
                            -1
                          )
                        }
                      >
                        <Minus size={14} />
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item,
                            1
                          )
                        }
                      >
                        <Plus size={14} />
                      </button>
                    </S.QuantityControls>

                    <div className="price">
                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </div>
                  </S.ItemInfo>

                  <S.RemoveButton
                    onClick={() =>
                      removeItem(
                        item.cart_id
                      )
                    }
                  >
                    <Trash2 size={16} />
                  </S.RemoveButton>
                </S.CartItem>
              ))}
          </S.CartList>
        )}

        <S.Footer>
          <S.Total>
            <span>Total</span>

            <strong>
              ₹
              {totalAmount.toLocaleString()}
            </strong>
          </S.Total>

          <S.CheckoutButton
            disabled={
              items.length === 0
            }
            onClick={
              handleCheckout
            }
          >
            Proceed to Checkout
          </S.CheckoutButton>
        </S.Footer>
      </S.Drawer>
    </>
  );
}