'use client';
import EventCard from "@/app/components/EventCard";
import FilterSidebar from "@/app/components/explore/FilterSidebar";
import { useState } from "react";

export default function page() {
    const [filters , setFilters] = useState({
        city: 'all',
        category: 'all',
        type: 'all',
    })

    const clearFilters = () => {
        setFilters({
            city: 'all',
            category: 'all',
            type: 'all',
        })
    }
    const events = [
        {
            id: 1,
            title: "Cairo Music Festival",
            description: "Amazing music festival in Cairo",
            image: "/event.jpg",
            date: "2022-01-01",
            location: "Cairo",
            category: "music",
            type: "free",
            price: 0,
        },
        {
            id: 2,
            title: "Alexandria Art Exhibition",
            description: "Contemporary art exhibition",
            image: "/event.jpg",
            date: "2022-01-02",
            location: "Alexandria",
            category: "art",
            type: "free",
            price: 0,
        },
        {
            id: 3,
            title: "Giza Sports Tournament",
            description: "Annual sports competition",
            image: "/event.jpg",
            date: "2022-01-03",
            location: "Giza",
            category: "sports",
            type: "paid",
            price: 100,
        },
        {
            id: 4,
            title: "Cairo Tech Conference",
            description: "Technology and innovation summit",
            image: "/event.jpg",
            date: "2022-01-04",
            location: "Cairo",
            category: "tech",
            type: "paid",
            price: 150,
        },
        {
            id: 5,
            title: "Port Said Food Festival",
            description: "Delicious food from around Egypt",
            image: "/event.jpg",
            date: "2022-01-05",
            location: "Port Said",
            category: "food",
            type: "free",
            price: 0,
        },
        {
            id: 6,
            title: "Sharm Music Concert",
            description: "Live music by the beach",
            image: "/event.jpg",
            date: "2022-01-06",
            location: "Sharm El Sheikh",
            category: "music",
            type: "paid",
            price: 200,
        },
        {
            id: 7,
            title: "Cairo Networking Event",
            description: "Connect with professionals",
            image: "/event.jpg",
            date: "2022-01-07",
            location: "Cairo",
            category: "networking",
            type: "free",
            price: 0,
        },
        {
            id: 8,
            title: "Alexandria Workshop",
            description: "Learn new skills",
            image: "/event.jpg",
            date: "2022-01-08",
            location: "Alexandria",
            category: "workshops",
            type: "paid",
            price: 130,
        },
        {
            id: 9,
            title: "New Damietta Festival",
            description: "Annual city festival",
            image: "/event.jpg",
            date: "2022-01-09",
            location: "New Damietta",
            category: "festivals",
            type: "free",
            price: 0,
        },
    ];
    console.log(filters);
    
    const filteredEvents = events.filter((event) => {
        const cityMatch = filters.city === 'all' || event.location === filters.city;
        const categoryMatch = filters.category === 'all' || event.category === filters.category;
        const priceMatch = filters.type === 'all' || event.type === filters.type;
        return cityMatch && categoryMatch && priceMatch;
    })
return (
    <section className="mx-auto max-w-7xl py-10 px-5">
        <h1 className="text-3xl mb-3 font-semibold">Explore Events</h1>
        <p className="text-gray-500">{filteredEvents.length} Events Found</p>
        {/* main content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="md:col-span-1">
                <FilterSidebar filters={filters} setFilters={setFilters}/>
            </div>
            {/* check if events are available */}
            {filteredEvents?.length > 0 ?
            <div className="md:col-span-3 events-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div> :
            // if no events are available
            <div className="md:col-span-3 flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center max-w-md">
                    <svg 
                        className="mx-auto h-16 w-16 text-gray-400 mb-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
                    <p className="text-gray-500 mb-6">
                        We couldn't find any events matching your criteria. Try adjusting your filters or check back later for new events.
                    </p>
                    <button 
                        onClick={clearFilters}
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
            }
        </div>
    </section>
)
}
