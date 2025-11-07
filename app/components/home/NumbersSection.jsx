import { Calendar, MapPin, TrendingUp, Users } from "lucide-react"

export default function NumbersSection() {
    const numbers = [
        {
            icon: <Calendar />,
            number: 100,
            title: "Events"
        },
        {
            icon: <Users />,
            number: 150,
            title: "Organizers"
        },
        {
            icon: <TrendingUp />,
            number: 1000,
            title: "Happy Attendees"
        },
        {
            icon: <MapPin />,
            number: 50,
            title: "Cities"
        }
    ]
return (
    <section className="bg-[#FBFCFC] py-12 border-t-2 border-gray-200 border-b-2">
        <div className="numbers-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-6xl px-4">
            {numbers.map((item , i) => (
                <div className="flex flex-col items-center justify-center gap-2" key={i}>
                    <span className="bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] rounded-xl p-3 text-white">{item.icon}</span>
                    <h1 className="font-medium text-3xl">{item.number}+</h1>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    </section>
)
}
