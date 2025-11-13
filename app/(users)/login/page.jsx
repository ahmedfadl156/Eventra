import LoginForm from "@/app/components/LoginForm";

export default function page() {
return (
    <div className="bg-gradient-to-r from-[#dcdcff] to-[#FFFF] h-screen flex flex-col items-center justify-center">
        <div className="mb-6">
            <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF]">Login To Eventra</h2>
            <p className="text-gray-600 text-center text-lg">Login to your account to access your events and more</p>
        </div>
        {/* Login Container */}
        <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6">
            <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF]">Login</h2>
            <LoginForm />
        </div>
    </div>
)
}
