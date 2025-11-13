import { useQuery } from "@tanstack/react-query";
import { getEvents, getEventTickets } from "./getEvents";

export function useEvents(){
    const{data: events , error , isLoading} = useQuery({
        queryKey: ['events'],
        queryFn: getEvents,
        
    })
    return {events , error , isLoading}
}

export function useEventTickets(id){
    const{data: tickets , error , isLoading} = useQuery({
        queryKey: ['tickets', id],
        queryFn: getEventTickets(id),
    })
    return {tickets , error , isLoading}
}
