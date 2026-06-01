import React from "react";
import axios from "axios";

export default function PaymentPage() {
  const address = JSON.parse(
    localStorage.getItem("selected_address")
  );

  const handlePayment = async () => {
    if (!address) {
      alert("Please select a delivery address");
      window.location.href = "/address";
      return;
    }

    try {
      const token = localStorage.getItem("access_token");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-payment-order`,
        {
          amount: Number(
            localStorage.getItem("cart_total")
          ),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const order = response.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Ekart Hub",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (paymentResponse) {
          try {
            await axios.post(
              `${import.meta.env.VITE_API_URL}/verify-payment`,
              null,
              {
                params: {
                  razorpay_order_id:
                    paymentResponse.razorpay_order_id,
                  razorpay_payment_id:
                    paymentResponse.razorpay_payment_id,
                  razorpay_signature:
                    paymentResponse.razorpay_signature,
                },
              }
            );

            await axios.post(
              `${import.meta.env.VITE_API_URL}/checkout`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            alert("Order Placed Successfully");
            window.location.href = "/orders";
          } catch {
            alert("Payment Verification Failed");
          }
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch {
      alert("Payment Failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
        background: "#1e1e1e",
        borderRadius: "12px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Payment
      </h1>

      <div
        style={{
          background: "#2a2a2a",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <h3>Delivery Address</h3>

        {address ? (
          <>
            <p>
              <b>{address.full_name}</b>
            </p>
            <p>{address.phone}</p>
            <p>{address.address_line}</p>
            <p>
              {address.city}, {address.state}
            </p>
            <p>{address.pincode}</p>
          </>
        ) : (
          <p>No address selected</p>
        )}
      </div>

      <button
        onClick={handlePayment}
        style={{
          width: "100%",
          padding: "14px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}