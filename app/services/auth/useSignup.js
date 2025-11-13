"use client";

import toast from "react-hot-toast";
import { Signup } from "./auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useSignup() {
    const router = useRouter();

    const { mutate: signup, isPending: signupIsPending } = useMutation({
        mutationFn: ({ name, email, phone, signupAs, password }) => 
            Signup({ name, email, phone, signupAs, password }),
        onSuccess: (data) => {
            toast.success("Account created successfully! Please check your email to verify your account.");
            console.log("Signup successful:", data);
            router.push("/login");
        },
        onError: (error) => {
            console.error("Signup error:", error);
            toast.error(error.message || "Signup failed. Please try again.");
        }
    });

    return { signup, signupIsPending };
}
