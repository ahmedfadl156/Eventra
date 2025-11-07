'use client'

import { useFormStatus } from "react-dom"

export default function SearchButton() {
    const status = useFormStatus();
return (
    <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-6 py-2 rounded-xl text-white">
        {status.pending ? "Searching..." : "Search"}
    </button>
)
}
