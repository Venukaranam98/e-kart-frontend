import { useMutation } from "@tanstack/react-query";
import { register } from "../../api";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
