import { BadgeCheck, Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";

export default function EventCard({event}) {
return (
    <div className="bg-white rounded-xl relative shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="image relative w-full h-64 overflow-hidden">
            <Image 
                src={event.image} 
                alt="Event image" 
                quality={75} 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        
        {/* Content Section */}
        <div className="content p-4">
            <div className="category flex items-center gap-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 text-sm rounded-full font-medium">{event.category}</span>
                <p className="flex items-center gap-1 text-[12px] text-gray-600">
                    <BadgeCheck className="size-4 text-purple-500"/>
                    Verified Organizer
                </p>
            </div>
            <h2 className="text-lg font-semibold mt-4">{event.title}</h2>
            <div className="date mt-4">
                <p className="flex items-center gap-2 text-gray-600">
                    <Calendar className="size-4"/>
                    <span>{event.date} . {event.time}</span>
                </p>
            </div>
            <p className="text-gray-600 flex items-center gap-2 mt-2 mb-8">
                <MapPin className="size-4"/>
                <span>{event.location}</span>
            </p>
            <div className="price flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">From</span>
                    <span className="font-semibold text-lg">${event.price}</span>
                </p>
                <span className="text-gray-600 flex items-center gap-1">
                    <Ticket className="size-4 text-orange-400/70"/>
                    <span className="text-sm text-orange-400/70">200 tickets left</span>
                </span>
            </div>
        </div>
    </div>
)
}
