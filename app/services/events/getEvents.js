import supabase from "../supabase";

export async function getEvents(){
    const {data , error} = await supabase
        .from('events')
        .select(`
            *,
            categories(name)
        `);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function getEventById(id){
    const {data , error} = await supabase
        .from('events')
        .select(`
            *,
            categories(name)
        `)
        .eq('id', id)
        .single();
    
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function getEventTickets(id){
    const {data , error} = await supabase.from('tickets').select('*').eq('event_id', id);
    if(error){
        throw new Error(error.message);
    }
    return data;
}