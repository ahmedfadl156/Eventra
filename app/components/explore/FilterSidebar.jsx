'use client';
import { ListFilter, MapPin, Tag, DollarSign } from "lucide-react";
import SearchForm from "./SearchForm";

export default function FilterSidebar({filters , setFilters, search, setSearch}) {
    function clearFilters(){
        setFilters({
            city: 'all',
            category: 'all',
            type: 'all',
        })
        setSearch('');
    }
    
    return (
        <aside className="bg-white sticky top-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-fit">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                    <ListFilter className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                </div>

                {/* Search */}
                <SearchForm search={search} setSearch={setSearch}/>

                {/* City Filter */}
                <div className="space-y-3">
                    <label htmlFor="city" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        Location
                    </label>
                    <select 
                        id="city" 
                        value={filters.city}
                        className="w-full border outline-none border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white hover:border-gray-400 transition-all cursor-pointer"
                        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    >
                        <option value="all">All Cities</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="New Damietta">New Damietta</option>
                        <option value="Port Said">Port Said</option>
                        <option value="Giza">Giza</option>
                        <option value="Sharm El Sheikh">Sharm El Sheikh</option>
                    </select>
                </div>

                {/* Category Filter */}
                <div className="space-y-3">
                    <label htmlFor="category" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <Tag className="w-4 h-4 text-gray-500" />
                        Category
                    </label>
                    <select 
                        id="category" 
                        value={filters.category}
                        className="w-full border outline-none border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white hover:border-gray-400 transition-all cursor-pointer"
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    >
                        <option value="all">All Categories</option>
                        <option value="Music">🎵 Music & Concerts</option>
                        <option value="Sports">⚽ Sports & Fitness</option>
                        <option value="Art">🎨 Arts & Culture</option>
                        <option value="Tech">💻 Tech & Business</option>
                        <option value="Food">🍽️ Food & Drink</option>
                        <option value="Workshops">🛠️ Workshops</option>
                        <option value="Networking">🤝 Networking</option>
                        <option value="Festivals">🎉 Festivals</option>
                    </select>
                </div>

                {/* Price Filter */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        Price Range
                    </label>
                    <div className="space-y-2.5">
                        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                            <input 
                                type="radio" 
                                name="price" 
                                value="all"
                                checked={filters.type === 'all'}
                                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                                className="w-4 h-4 text-primary border-gray-300 cursor-pointer" 
                            />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">All Events</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                            <input 
                                type="radio" 
                                name="price" 
                                value="free"
                                checked={filters.type === 'free'}
                                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                                className="w-4 h-4 text-primary border-gray-300 cursor-pointer" 
                            />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Free Events</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                            <input 
                                type="radio" 
                                name="price" 
                                value="paid"
                                checked={filters.type === 'paid'}
                                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                                className="w-4 h-4 text-primary border-gray-300 cursor-pointer" 
                            />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Paid Events</span>
                        </label>
                    </div>
                </div>

                {/* Clear Filters Button */}
                <button onClick={clearFilters} className="w-full py-2.5 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                    Clear All Filters
                </button>
            </div>
        </aside>
    )
}
