import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    address_line: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [addresses, setAddresses] = useState([]);

  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/address`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAddresses(
        Array.isArray(response.data)
          ? response.data
          : response.data
          ? [response.data]
          : []
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveAddress = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/address`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Address Saved Successfully");

      setFormData({
        full_name: "",
        phone: "",
        address_line: "",
        city: "",
        state: "",
        pincode: "",
      });

      fetchAddresses();
    } catch (error) {
      console.error(error);
      alert("Failed to Save Address");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "12px",
          background: "#1e1e1e",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>
          Delivery Address
        </h1>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="address_line"
          placeholder="House No, Street, Area"
          value={formData.address_line}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={handleSaveAddress}
          style={saveButtonStyle}
        >
          Save Address
        </button>

  <button
    onClick={() => {
      if (addresses.length === 0) {
        alert("Please save an address first");
        return;
      }

      localStorage.setItem(
        "selected_address",
        JSON.stringify(addresses[0])
      );

      navigate("/payment");
    }}
    style={{
      width: "100%",
      padding: "14px",
      background: "#16a34a",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      marginTop: "10px",
    }}
  >
    Continue To Payment
  </button>
      </div>

      <h2 style={{ marginBottom: "20px" }}>
        Saved Addresses
      </h2>

      {addresses.length === 0 ? (
        <p>No addresses found.</p>
      ) : (
        addresses.map((address) => (
          <div
            key={address.id}
            style={{
              background: "#1e1e1e",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            <h3>{address.full_name}</h3>
            <p>{address.phone}</p>
            <p>{address.address_line}</p>
            <p>
              {address.city}, {address.state}
            </p>
            <p>{address.pincode}</p>
          </div>
        ))
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #444",
  background: "#2a2a2a",
  color: "white",
  fontSize: "15px",
  boxSizing: "border-box",
};

const saveButtonStyle = {
  width: "100%",
  padding: "14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};