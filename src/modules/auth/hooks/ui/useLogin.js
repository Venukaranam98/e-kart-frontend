import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginSchema } from "../../schemas/login.schema";
import { useLoginMutation } from "../api/useLoginMutation";

export const useLogin = () => {
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
      onSuccess: (response) => {
        toast.success("Login successful!");

      if (response?.access_token) {
        localStorage.setItem(
          "access_token",
          response.access_token
        );
      }
        window.location.href = "/";
      },
      onError: (error) => {
        toast.error(
          error?.message ||
            "Login failed. Please try again."
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