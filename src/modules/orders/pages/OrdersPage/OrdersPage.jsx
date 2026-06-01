import { Link } from "react-router-dom";
import { Package, Image as ImageIcon } from "lucide-react";
import { useOrdersQuery } from "../../hooks/api/useOrdersQuery";
import * as S from "./OrdersPage.styles";

export default function OrdersPage() {
  const { data: orders = [], isLoading } = useOrdersQuery();

  if (isLoading) {
    return (
      <S.PageWrapper>
        <S.OrdersContainer>
          <S.Title>Order History</S.Title>
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--color-mute)' }}>Loading your orders...</div>
        </S.OrdersContainer>
      </S.PageWrapper>
    );
  }

  return (
    <S.PageWrapper>
      <S.OrdersContainer>
        <S.Title>Order History</S.Title>

        {orders.length === 0 ? (
          <S.EmptyState>
            <Package size={64} strokeWidth={1} />
            <h2>No orders yet</h2>
            <p>Looks like you haven't made any purchases.</p>
            <Link to="/products">Start Shopping</Link>
          </S.EmptyState>
        ) : (
          <S.OrdersList>
            {orders.map((order) => (
              <S.OrderCard key={order.order_id}>
                <S.OrderHeader>
                  <S.OrderInfo>
                    <div>
                      <span>Order Placed</span>
                      <strong>{new Date(order.created_at).toLocaleDateString()}</strong>
                    </div>
                    <div>
                      <span>Total Amount</span>
                      <strong>₹{order.total_price.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span>Order ID</span>
                      <strong>#{order.order_id}</strong>
                    </div>
                  </S.OrderInfo>
                </S.OrderHeader>
                
                <S.ItemsList>
                  {order.products.map((item, index) => (
                    <S.ItemRow key={index}>
                      {item.image ? (
                        <img src={item.image} alt={item.product_title} />
                      ) : (
                        <div className="image-placeholder">
                          <ImageIcon size={24} />
                        </div>
                      )}
                      <div className="details">
                        <h4>{item.product_title}</h4>
                        <p>Qty: <span>{item.quantity}</span></p>
                      </div>
                      <div className="price">₹{item.price.toLocaleString()}</div>
                    </S.ItemRow>
                  ))}
                </S.ItemsList>
              </S.OrderCard>
            ))}
          </S.OrdersList>
        )}
      </S.OrdersContainer>
    </S.PageWrapper>
  );
}
