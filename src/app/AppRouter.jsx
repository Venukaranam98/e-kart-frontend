import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Home";

import LoginPage from "../modules/auth/pages/LoginPage";
import RegisterPage from "../modules/auth/pages/RegisterPage";

import ProductsPage from "../modules/products/pages/ProductsPage";
import ProductDetailsPage from "../modules/products/pages/ProductsPage/ProductDetailsPage";

import OrdersPage from "../modules/orders/pages/OrdersPage";

import AddressPage from "../modules/address/pages/AddressPage";
import PaymentPage from "../modules/payment/pages/PaymentPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/products" element={<ProductsPage />} />
      <Route
        path="/products/:id"
        element={<ProductDetailsPage />}
      />

      <Route path="/orders" element={<OrdersPage />} />

      <Route path="/address" element={<AddressPage />} />

      <Route path="/payment" element={<PaymentPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}