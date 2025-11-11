import { Search } from 'lucide-react'
import React from 'react'

export default function SearchForm({search , setSearch}) {
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

return (
        <form className='relative'>
            <input 
                value={search} 
                onChange={handleChange} 
                type="text" 
                name='search' 
                placeholder="Search events..." 
                className='w-full bg-white outline-none border border-gray-400/60 px-4 py-3 rounded-xl'
            />
            <button 
                type='submit' 
                className='absolute cursor-pointer size-6 text-gray-500 right-2 top-1/2 -translate-y-1/2'
            >
                <Search />
            </button>
        </form>
    )
}
