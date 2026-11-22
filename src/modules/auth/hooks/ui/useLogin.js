import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { loginSchema } from "../../schemas/login.schema";
import { useLoginMutation } from "../api/useLoginMutation";
import { useAuthStore } from "../../store/useAuthStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { login: setAuthLogin, checkAuth } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: async (response) => {
        toast.success("Login successful!");

        const token = response?.access_token || response?.data?.access_token;
        if (token) {
          setAuthLogin(token, response?.user || null);
          await checkAuth();
          queryClient.invalidateQueries();
        }

        // Determine destination: redirect back to originally requested route or fallback to /products
        const from = location.state?.from?.pathname
          ? `${location.state.from.pathname}${location.state.from.search || ""}${location.state.from.hash || ""}`
          : "/products";

        navigate(from, { replace: true });
      },
      onError: (error) => {
        toast.error(
          error?.message || "Login failed. Please try again."
        );
      },
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
  };
};
