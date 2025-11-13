"use client";

import EventCard from "@/app/components/EventCard";
import FilterSidebar from "@/app/components/explore/FilterSidebar";
import { useEvents } from "@/app/services/events/useEvents";
import { useState } from "react";
import Loading from "./loading";

export default function Page() {
    const [filters , setFilters] = useState({
        city: 'all',
        category: 'all',
        type: 'all',
    })

    const [search, setSearch] = useState('');

    const clearFilters = () => {
        setFilters({
            city: 'all',
            category: 'all',
            type: 'all',
        })
        setSearch(''); 
    }
    const {events , error , isLoading} = useEvents();
    const filteredEvents = events?.filter((event) => {
        const cityMatch = filters.city === 'all' || event.city === filters.city;
        const categoryMatch = filters.category === 'all' || event.categories?.name === filters.category;
        const priceMatch = filters.type === 'all' || event.type === filters.type;
        
        const searchLower = search.toLowerCase();
        const searchMatch = search === '' || 
            event.title.toLowerCase().includes(searchLower) ||
            event.description.toLowerCase().includes(searchLower) ||
            event.city?.toLowerCase().includes(searchLower) ||
            event.categories?.name?.toLowerCase().includes(searchLower);
        
        return cityMatch && categoryMatch && priceMatch && searchMatch;
    })
    
    if(isLoading){
        return <Loading />
    }
return (
    <section className="mx-auto max-w-7xl py-10 px-5">
        <h1 className="text-3xl mb-3 font-semibold">Explore Events</h1>
        <p className="text-gray-500">{filteredEvents?.length} Events Found</p>
        {/* main content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="md:col-span-1">
                <FilterSidebar 
                    filters={filters} 
                    setFilters={setFilters}
                    search={search}
                    setSearch={setSearch}
                />
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
