import SignupForm from "@/app/components/SignupForm";

export default function page() {
return (
    <div className="bg-gradient-to-r from-[#dcdcff] to-[#FFFF] h-screen flex flex-col items-center justify-center">
        <div className="mb-6">
            <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF]">Sign Up To Eventra</h2>
            <p className="text-gray-600 text-center text-lg">Sign up to explore and book events and more</p>
        </div>
        {/* Signup Container */}
        <SignupForm />
    </div>
    )
}
