import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/ui/useProducts";
import axios from "axios";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const { products, isLoading } = useProducts(100);

  const product = products?.find(
    (item) => item.id === Number(id)
  );

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/create-order",
        {
          amount: product.price,
        }
      );

      const order = response.data;

      const options = {
        key: "rzp_test_SsnPXMO3zWuLvm",
        amount: order.amount,
        currency: order.currency,
        name: "E-Kart",
        description: product.title,
        order_id: order.id,

        handler: function (response) {
          alert(
            "Payment Successful!\nPayment ID: " +
              response.razorpay_payment_id
          );
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "350px",
          height: "350px",
          objectFit: "contain",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      />

      <div>
        <h1>{product.title}</h1>

        <h2 style={{ color: "#00d084" }}>
          ₹{product.price}
        </h2>

        <p>{product.description}</p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "12px 24px",
              background: "#ff6b00",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Add To Cart
          </button>

          <button
            onClick={handlePayment}
            style={{
              padding: "12px 24px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}