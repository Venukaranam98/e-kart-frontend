import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../modules/auth/store/useAuthStore";
import LoadingScreen from "../LoadingScreen";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, isLoading, user } = useAuthStore();
  const location = useLocation();

  // 1. While determining authentication status (on app start / refresh),
  // show loading screen to prevent flashing protected content or incorrectly redirecting
  if (isLoading) {
    return <LoadingScreen message="Checking authentication..." />;
  }

  // 2. If not authenticated, redirect to Login preserving intended location
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // 3. If adminOnly is requested, check if user has admin privileges
  if (adminOnly && !user?.is_admin) {
    return <Navigate to="/products" replace />;
  }

  // 4. Authenticated -> render protected content
  return children;
}

