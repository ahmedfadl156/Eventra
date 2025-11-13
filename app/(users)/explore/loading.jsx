'use client';

export default function Loading() {
    return (
        <section className="mx-auto max-w-7xl py-10 px-5">
            {/* Header Skeleton */}
            <div className="mb-3">
                <div className="h-9 w-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-5 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                {/* Sidebar Skeleton */}
                <div className="md:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
                        {/* Filter Header */}
                        <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                            <div className="w-5 h-5 bg-gray-300 rounded animate-pulse"></div>
                            <div className="h-5 w-20 bg-gray-300 rounded animate-pulse"></div>
                        </div>

                        {/* Search Bar Skeleton */}
                        <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse"></div>

                        {/* Filter Sections */}
                        {[1, 2, 3].map((section) => (
                            <div key={section} className="space-y-3">
                                <div className="h-5 w-24 bg-gray-300 rounded animate-pulse"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Clear Button Skeleton */}
                        <div className="h-10 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 rounded-lg animate-pulse"></div>
                    </div>
                </div>

                {/* Events Grid Skeleton */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((card) => (
                        <div key={card} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                            {/* Image Skeleton */}
                            <div className="relative w-full h-64 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </div>

                            {/* Content Skeleton */}
                            <div className="p-4 space-y-4">
                                {/* Category Badge */}
                                <div className="flex items-center gap-4">
                                    <div className="h-7 w-20 bg-purple-200 rounded-full"></div>
                                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                                </div>

                                {/* Title */}
                                <div className="space-y-2">
                                    <div className="h-5 w-full bg-gray-300 rounded"></div>
                                    <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                                </div>

                                {/* Date */}
                                <div className="h-4 w-40 bg-gray-200 rounded"></div>

                                {/* Location */}
                                <div className="h-4 w-32 bg-gray-200 rounded mb-8"></div>

                                {/* Price Section */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div className="space-y-1">
                                        <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                        <div className="h-6 w-20 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="h-4 w-24 bg-orange-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Loading Indicator */}
            <div className="fixed bottom-8 right-8 bg-white rounded-full shadow-2xl p-4 border-2 border-purple-200">
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-purple-400 rounded-full border-t-transparent animate-spin-slow"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </section>
    )
}
