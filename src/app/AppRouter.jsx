import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Home";

import LoginPage from "../modules/auth/pages/LoginPage";
import RegisterPage from "../modules/auth/pages/RegisterPage";
import ForgotPasswordPage from "../modules/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "../modules/auth/pages/ResetPasswordPage";

import ProductsPage from "../modules/products/pages/ProductsPage";
import ProductDetailsPage from "../modules/products/pages/ProductsPage/ProductDetailsPage";

import OrdersPage from "../modules/orders/pages/OrdersPage";
import TrackOrderPage from "../modules/orders/pages/TrackOrderPage/TrackOrderPage";

import AddressPage from "../modules/address/pages/AddressPage";
import PaymentPage from "../modules/payment/pages/PaymentPage";
import WishlistPage from "../modules/wishlist/pages/WishlistPage";

import ProtectedRoute from "../shared/components/ProtectedRoute";
import PublicRoute from "../shared/components/PublicRoute";
import { useCartStore } from "../modules/cart/store/useCartStore";

// Helper component for direct /cart navigation
function CartRouteRedirect() {
  const openDrawer = useCartStore((state) => state.openDrawer);

  useEffect(() => {
    openDrawer();
  }, [openDrawer]);

  return <Navigate to="/products" replace />;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Default Root: Publicly accessible catalog */}
      <Route path="/" element={<Navigate to="/products" replace />} />

      {/* Public Pages */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />

      {/* Auth Public Pages (redirect if already logged in) */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        }
      />

      {/* Protected Routes: Authentication strictly required */}
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <TrackOrderPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id/track"
        element={
          <ProtectedRoute>
            <TrackOrderPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/track-order/:id"
        element={
          <ProtectedRoute>
            <TrackOrderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartRouteRedirect />
          </ProtectedRoute>
        }
      />

      <Route
        path="/address"
        element={
          <ProtectedRoute>
            <AddressPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <PaymentPage />
          </ProtectedRoute>
        }
      />

      {/* 404 Catch-All */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
