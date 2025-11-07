import { Music, BriefcaseBusiness, Utensils, Palette, Volleyball, BookCopy, Handshake, TentTree  } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"

export default function CategoriesSection() {
    const categories = [
        {
            icon: "🎵",
            title: "Music & Concerts"
        },
        {
            icon: '💼',
            title: "Tech & Business"
        },
        {
            icon: "🍽️",
            title: "Food & Drink"
        },
        {
            icon: "🎨",
            title: "Arts & Culture"
        },
        {
            icon: '⚽',
            title: "Sports & Fitness"
        },  
        {
            icon: '📚',
            title: "Workshops"
        },
        {
            icon: '🤝',
            title: "Networking"
        },
        {
            icon: '🎪',
            title: "Festivals"
        },
    ]
return (
    <section className='mx-auto max-w-7xl py-12 px-4'>
        <div className="header-text text-center">
            <h2 className="text-4xl font-semibold mb-4">Explore Categories</h2>
            <p className="text-gray-500">Find Events That Match Your Interests</p>
        </div>
        <div
        className="categories-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
            {categories.map((category , i) => (
                <div
                className="category-card flex flex-col text-left items-center md:items-start gap-4 bg-white border border-gray-200 rounded-xl p-8 group hover:border-purple-500 transition-colors duration-300 hover:shadow-xl cursor-pointer" 
                key={i}>
                    <div 
                    className="category-icon text-3xl">
                        {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-purple-500 transition-colors duration-300">{category.title}</h3>
                </div>
            ))}
        </div>
    </section>
)
}
