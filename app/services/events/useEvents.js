import { useQuery } from "@tanstack/react-query";
import { getEvents } from "./getEvents";

export function useEvents(){
    const{data: events , error , isLoading} = useQuery({
        queryKey: ['events'],
        queryFn: getEvents,
        
    })
    return {events , error , isLoading}
}