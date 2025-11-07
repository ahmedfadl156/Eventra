import { ArrowRight } from "lucide-react";
import Link from "next/link";
import EventCard from "../EventCard";

export default function FeaturedEvents() {
    const events = [
        {
            id: 1,
            title: "Summer Musical Festival 2025",
            image: "/event.jpg",
            date: "Jul 15",
            time: "10:00 AM",
            location: "New York",
            category: "Music",
            price: 100,
            rating: 4.5,
            reviews: 100,
            tickets: 50,
            description: "Event 1 description",
        }
    ]
return (
    <section className='mx-auto max-w-7xl py-12 px-4 mt-20'>
        {/* Header */}
        <div className="header flex items-center justify-between">
            <div className="text">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Featured Events</h2>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-2xl">Handpicked events you don't want to miss</p>
            </div>
            <div className="view-all hover:bg-gray-400/30 transition-colors duration-300 p-2 rounded-lg text-sm md:text-base">
                <Link href="/events" className="flex items-center gap-2">
                View all
                <ArrowRight className="size-4"/>
                </Link>
            </div>
        </div>
        {/*Featured Events Cards */}
        <div className="featured-events grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {events.map((event) => (
                <EventCard key={event.id} event={event}/>
            ))}
        </div>
    </section>
)
}
