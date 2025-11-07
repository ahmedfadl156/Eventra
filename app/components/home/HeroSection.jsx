import Link from "next/link";
import HeroSearchForm from "./HeroSearchForm";
import { ArrowRight, Calendar } from "lucide-react";
import NumbersSection from "./NumbersSection";

export default function HeroSection() {
return (
    <>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-[#F3F3FF] to-[#FFFF] h-[40vh] flex flex-col justify-center items-center">
        <div className="text text-center">
            <h1 className="text-[#7C5CFF] text-4xl md:text-5xl lg:text-6xl">Discover Amazing Events</h1>
            <p className="text-[#6B83AF] my-6 text-xl">Find and book tickets to the best concerts, festivals, workshops, and more</p>
            <HeroSearchForm />
            <div className="links flex items-center justify-center gap-6 mt-6">
                <Link href="/explore" className="bg-white border-2 border-gray-200 rounded-lg px-4 py-1.5 flex items-center gap-2 hover:bg-gray-200 duration-300">
                Browse Events
                <ArrowRight className="size-4"/>
                </Link>
                <Link href="/create" className="flex items-center gap-2 bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] rounded-lg px-4 py-1.5 text-white">
                <Calendar className="size-4"/>
                Create Event
                </Link>
            </div>
        </div>
    </section>

    {/* Numbers Section */}
    <NumbersSection />
    </>
)
}
