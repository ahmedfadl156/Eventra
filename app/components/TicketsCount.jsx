'use client'

export default function TicketsCount({ticket, ticketCount, updateTicketCount}) {
    function increment(){
        updateTicketCount(ticket.id, ticketCount + 1);
    }
    function decrement(){
        updateTicketCount(ticket.id, ticketCount - 1);
    }
return (
    <div className="flex items-center gap-2 mt-4">
        <button 
            onClick={decrement} 
            className="bg-white text-xl cursor-pointer border border-gray-400/20 rounded-xl w-8 h-8 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={ticketCount === 0}
        >
            -
        </button>
        <span className="font-bold text-lg min-w-8 text-center">{ticketCount}</span>
        <button 
            onClick={increment} 
            className="bg-white text-xl cursor-pointer border border-gray-400/20 rounded-xl w-8 h-8 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={ticketCount >= ticket.quantity}
        >
            +
        </button>
    </div>
)
}
