'use client'
import { useMutation } from "@tanstack/react-query";
import { Login } from "./auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useLogin(){
    const router = useRouter();
    const {mutate: login , isPending: loginIsPending} = useMutation({
        mutationFn: ({email , password}) => Login({email , password}),
        onSuccess: () => {
            toast.success("Login successful");
            router.push("/");
        },
        onError: (error) => {
            toast.error("Login failed");
            console.log(error.message);
        }
    })
    return {login , loginIsPending}
}