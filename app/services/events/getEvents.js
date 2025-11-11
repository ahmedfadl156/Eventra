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
