import { getEventById } from "@/app/services/events/getEvents";
import Image from "next/image"

export default async function page({params}) {
    const {id} = await params;
    const event = await getEventById(id);
return (
    <section>
        <div className="image-container w-full h-[50vh] relative overflow-hidden">
            <Image src={event.image_url} alt={event.title} quality={75} fill className="object-cover duration-300" />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="content mx-auto max-w-7xl flex flex-col gap-3 absolute bottom-8 left-10">
                <div className="badge">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 text-sm rounded-full font-medium">{event.categories?.name}</span>
                </div>
                <h2 className="text-3xl font-semibold text-white">{event.title}</h2>
                <p className="text-gray-300">from
                    <span className="text-white font-bold"> {event.price}$</span>
                </p>
            </div>
        </div>
        <div className="content-container grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto max-w-7xl px-5 py-10">
            <div className="event-info md:col-span-3">
                <div className="event-info-header bg-white border border-gray-400/20 grid grid-cols-1 md:grid-cols-3 rounded-2xl p-6">
                    <div className="date">
                        
                    </div>
                </div>
            </div>
            <div className="tickets-section md:col-span-1">
                
            </div>
        </div>
    </section>
)
}
