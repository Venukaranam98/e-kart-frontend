import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { registerSchema } from "../../schemas/register.schema";
import { useRegisterMutation } from "../api/useRegisterMutation";

export const useRegister = () => {
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
      onSuccess: (response) => {
        toast.success("Registration successful!");

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
            "Registration failed. Please try again."
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