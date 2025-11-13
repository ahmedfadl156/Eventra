'use client'
import { useState } from "react";
import { Ticket } from "lucide-react";
import Link from "next/link";
import TicketsCount from "./TicketsCount";

export default function TicketsSection({ tickets }) {
    const [ticketCounts, setTicketCounts] = useState({});
    const currentEventId = tickets.length > 0 ? tickets[0].event_id : null;
    const getTotalTicketsCount = () => {
        return Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);
    };

    const getTotalPrice = () => {
        return tickets.reduce((total, ticket) => {
            const count = ticketCounts[ticket.id] || 0;
            return total + (count * ticket.price);
        }, 0);
    };

    const getServiceFee = () => {
        return getTotalPrice() * 0.02;
    };
    const updateTicketCount = (ticketId, count) => {
        setTicketCounts(prev => ({
            ...prev,
            [ticketId]: Math.max(0, count)
        }));
    };

    return (
        <div className="tickets-section md:col-span-1">
            <div className="bg-white border border-gray-400/20 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4">Select Tickets</h2>
                {tickets.map(ticket => (
                    <div key={ticket.id} className="ticket_container mb-4 bg-white border border-gray-400/20 rounded-2xl p-6">
                        <h2 className="text-lg font-semibold mb-2">{ticket.ticket_type}</h2>
                        <p className="text-gray-600 font-bold mb-2">{ticket.price}$</p>
                        <p className="text-gray-600">{ticket.quantity} available</p>
                        <TicketsCount 
                            ticket={ticket} 
                            ticketCount={ticketCounts[ticket.id] || 0}
                            updateTicketCount={updateTicketCount}
                        />
                    </div>
                ))}
                
                {getTotalTicketsCount() > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-400/20">
                        <div className="tickets_summary mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-gray-600">Total Tickets ({getTotalTicketsCount()})</p>
                                <p className="text-gray-600">{getTotalPrice().toFixed(2)}$</p>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-gray-600">Service Fee</p>
                                <p className="text-gray-600">{getServiceFee().toFixed(2)}$</p>
                            </div>
                            <div className="flex justify-between items-center border-t border-gray-400/20 pt-2">
                                <p className="text-gray-600 font-bold">Total</p>
                                <p className="text-gray-600 font-bold">{(getTotalPrice() + getServiceFee()).toFixed(2)}$</p>
                            </div>
                        </div>
                        <Link href={`/checkout/${currentEventId}`} className="bg-purple-600 justify-center hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg transition-colors duration-300 w-full flex items-center gap-2">
                            <Ticket />
                            Buy Tickets ({getTotalTicketsCount()})
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
