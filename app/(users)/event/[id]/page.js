import TicketsSection from "@/app/components/TicketsSection";
import { getEventById, getEventTickets } from "@/app/services/events/getEvents";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default async function page({params}) {
    const {id} = await params;
    const event = await getEventById(id);
    const tickets = await getEventTickets(id);
    console.log(tickets);
    const date = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(new Date(event.date));
    function formatTime(time){
        const [hours, minutes] = time.split(':');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        return `${hours % 12 || 12}:${minutes} ${ampm}`;
    }
return (
    <section>
        <div className="image-container w-full h-[50vh] relative overflow-hidden">
            <Image src={event.image_url} alt={event.title} quality={75} fill className="object-cover duration-300" />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="content absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full">
                <div className="mx-auto flex flex-col gap-3 max-w-7xl px-10">
                    <div className="badge">
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 text-sm rounded-full font-medium">{event.categories?.name}</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-white">{event.title}</h2>
                    <p className="text-gray-300">from
                        <span className="text-white font-bold"> {event.price}$</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="content-container grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-5 py-10">
            <div className="event-info md:col-span-2">
                <div className="event-info-header bg-white border border-gray-400/20 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl p-6">
                    <div className="date flex items-center gap-3">
                        <Calendar className="size-10 text-purple-600 bg-purple-100 rounded-xl p-2"/>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-600">Date</p>
                            <span className="text-md text-gray-600">{date}</span>
                        </div>
                    </div>
                    <div className="time flex items-center gap-3">
                        <Calendar className="size-10 text-cyan-400 bg-cyan-100 rounded-xl p-2"/>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-600">Time</p>
                            <span className="text-md text-gray-600">{formatTime(event.time)}</span>
                        </div>
                    </div>
                    <div className="location flex items-center gap-3">
                        <MapPin className="size-10 text-green-600 bg-green-100 rounded-xl p-2"/>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-600">Location</p>
                            <span className="text-md text-gray-600">{event.city} . {event.location_name}</span>
                        </div>
                    </div>
                </div>
                <div className="event-description mt-16">
                    <h2 className="text-xl font-bold mb-4">About This Event</h2>
                    <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="event-location bg-white border border-gray-400/20 rounded-2xl p-6 mt-16">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <MapPin className="size-10 text-green-600 bg-green-100 rounded-xl p-2"/>
                        Location
                    </h2>
                    <p className="text-gray-600">{event.city} . {event.location_name} . {event.address}</p>
                    <div className="map-view">
                        <h3>View on Google Maps</h3>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-12">Event Organizer</h1>
                <div className="event-organizer bg-white border border-gray-400/20 rounded-2xl p-6 mt-4">
                <div className="details flex gap-6">
                    <div className="image">
                        <Image src={event.image_url} alt={event.title} quality={75} width={100} height={100} className="object-cover" />
                    </div>
                    <div className="info">
                        <h2 className="text-lg font-semibold">{event.title}</h2>
                        <p className="text-gray-600">{event.city}</p>
                    </div>
                </div>
                </div>
            </div>
            <TicketsSection tickets={tickets} />
        </div>
    </section>
)
}
