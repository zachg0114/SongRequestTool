'use client';
import { useRef, useState } from "react";
import getSearchResults from "./getSearch";
import { Button } from "@nextui-org/react";

export const SearchBar = () => {
    const searchRef = useRef();
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const getSearch = async () => {
        const results = await getSearchResults(searchRef.current.value);
        setSearchResults(results);
        setShowDropdown(results?.length > 0);
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await getSearch();
        }
    };

    return (
        <div className="flex justify-center mt-8 mb-4 relative">
            <div className="w-full md:w-[32rem] max-w-2xl"> {/* Adjust this line */}
                <div className="flex border-2 rounded w-full">
                    <input 
                        ref={searchRef} 
                        type="text" 
                        id="search" 
                        placeholder="Search" 
                        className="px-4 py-2 w-full text-white"
                        onKeyDown={handleKeyDown}
                    />
                    <Button 
                        radius="none"
                        onClick={getSearch}
                        className="flex items-center justify-center px-4 border-l bg-black text-white hover:bg-gray-500"
                    >
                        Search
                    </Button>
                </div>
                {showDropdown && (
                    <div className="absolute w-full mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 overflow-auto">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {searchResults.map((result, index) => (
                                index < 10 && (
                                    <a
                                        key={index}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b last:border-b-0"
                                        role="menuitem"
                                        href={`/confirm/${result.id}`}
                                    >
                                        {index + 1} - {result.title}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
