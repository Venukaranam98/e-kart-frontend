import { useMutation } from "@tanstack/react-query"
import { login } from "../../api"

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log(data)
        }
    })
}