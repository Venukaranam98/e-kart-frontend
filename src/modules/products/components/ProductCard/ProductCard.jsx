import * as S from "./ProductCard.styles";
import { useAddToCartMutation } from "../../../cart/hooks/api/useCartMutations";
import { useCartQuery } from "../../../cart/hooks/api/useCartQuery";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const { id, title, price, description, category, image } = product;

  const { mutate: addToCart, isPending } = useAddToCartMutation();
  const { data: cartItems = [] } = useCartQuery();

  const isAdded = cartItems.some(
    (item) => item.product_title === title
  );

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart({
        productId: id,
        quantity: 1,
      });
    }
  };

  const handleViewProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <S.Card>
      <S.ImageWrapper
        onClick={handleViewProduct}
        style={{ cursor: "pointer" }}
      >
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span style={{ color: "var(--color-mute)" }}>
            No Image
          </span>
        )}
      </S.ImageWrapper>

      <S.Content>
        <S.Category>{category}</S.Category>

        <S.Title
          onClick={handleViewProduct}
          style={{ cursor: "pointer" }}
        >
          {title}
        </S.Title>

        <S.Description>{description}</S.Description>

        <S.Footer>
          <S.Price>
            ₹{price.toLocaleString()}
          </S.Price>

          <S.Button
            onClick={handleAddToCart}
            disabled={isPending || isAdded}
            style={
              isAdded
                ? {
                    backgroundColor: "var(--color-success)",
                    cursor: "default",
                  }
                : {}
            }
          >
            {isPending
              ? "Adding..."
              : isAdded
              ? "Added"
              : "Add to Cart"}
          </S.Button>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
}