import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { registerSchema } from "../../schemas/register.schema";
import { useRegisterMutation } from "../api/useRegisterMutation";
import { useAuthStore } from "../../store/useAuthStore";

export const useRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { login: setAuthLogin, checkAuth } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useRegisterMutation();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: async (response) => {
        toast.success("Registration successful!");

        const token = response?.access_token || response?.data?.access_token;
        if (token) {
          setAuthLogin(token, response?.user || null);
          await checkAuth();
          queryClient.invalidateQueries();
        }

        const from = location.state?.from?.pathname
          ? `${location.state.from.pathname}${location.state.from.search || ""}${location.state.from.hash || ""}`
          : "/products";

        navigate(from, { replace: true });
      },
      onError: (error) => {
        toast.error(
          error?.message || "Registration failed. Please try again."
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
