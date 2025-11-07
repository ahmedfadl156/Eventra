import { ArrowRight, Calendar, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
    const features = [
        {
            icon: <Calendar className="size-6" />,
            title: "Easy Booking",
            description: "Book tickets in seconds"
        },
        {
            icon: <Users className="size-6" />,
            title: "Trusted Organizers",
            description: "Verified event creators"
        },
        {
            icon: <Zap className="size-6" />,
            title: "Instant Confirmation",
            description: "Get tickets immediately"
        }
    ];

    return (
        <section className="mx-auto max-w-7xl py-20 px-4 mt-20">
            {/* Main CTA Card */}
            <div className="bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="p-8 md:p-12 lg:p-16 text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Ready to Create Your Next Event?
                        </h2>
                        <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                            Join thousands of organizers who trust Eventra to bring their events to life. 
                            Start creating memorable experiences today.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link 
                                href="/create-event" 
                                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                            >
                                Create Event
                                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link 
                                href="/events" 
                                className="bg-purple-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700/70 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                            >
                                Browse Events
                            </Link>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-start gap-2">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                                    <p className="text-purple-100 text-xs">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image/Pattern */}
                    <div className="hidden lg:block relative h-full min-h-[500px]">
                        <div className="absolute inset-0 bg-linear-to-br from-purple-400/20 to-pink-400/20">
                            {/* Decorative circles */}
                            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            
                            {/* Grid pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                                    {[...Array(64)].map((_, i) => (
                                        <div key={i} className="border border-white/30"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
