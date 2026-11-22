import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../modules/auth/store/useAuthStore";
import LoadingScreen from "../LoadingScreen";

export default function PublicRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuthStore();
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen message="Loading..." />;
  }

  if (isAuthenticated) {
    const destination = location.state?.from?.pathname
      ? `${location.state.from.pathname}${location.state.from.search || ""}`
      : "/products";
    return <Navigate to={destination} replace />;
  }

  return children;
}

