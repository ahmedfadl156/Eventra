import Form from "next/form";
import SearchButton from "../SearchButton";
export default function HeroSearchForm() {
return (
    <Form action="/search" className="bg-white border-gray-400/50 shadow-md relative w-full rounded-xl">
        <input type="text" name="query" placeholder="Search events , artists , or venues..." className="w-full p-4 rounded-xl outline-none" />
        <SearchButton />
    </Form>
)
}
