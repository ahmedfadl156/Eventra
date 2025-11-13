'use client'

import { useForm } from "react-hook-form";
import { useLogin } from "../services/auth/useLogin"
import toast from "react-hot-toast";

export default function LoginForm() {
    const {login , loginIsPending} = useLogin()
    const {register , handleSubmit} = useForm()
    const onSubmit = (data) => {
        if(!data.email || !data.password){
            toast.error("Please enter email and password")
            return
        }
        login(data)
    }
return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input {...register("email")} type="email" name="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input {...register("password")} type="password" name="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                </div>
                <button type="submit" className="w-full text-2xl font-bold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-[#23C3FF] hover:to-[#7C5CFF] transition-colors duration-200">Login</button>
            </form>
    )
}
