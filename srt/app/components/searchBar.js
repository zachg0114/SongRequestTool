'use client';
import { useRef, useState } from "react";
import getSearchResults from "./getSearch";

export const SearchBar = () => {
    const searchRef = useRef();
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const getSearch = async () => {
        const results = await getSearchResults(searchRef.current.value);
        setSearchResults(results);
        setShowDropdown(results.length > 0);
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await getSearch();
        }
    };

    return (
        <div className="flex justify-center my-4">
            <div className="w-3/4 max-w-2xl">
                <div className="flex border-2 rounded">
                    <input 
                        ref={searchRef} 
                        type="text" 
                        id="search" 
                        placeholder="Search" 
                        className="px-4 py-2 w-full text-black"
                        onKeyDown={handleKeyDown}
                    />
                    <button 
                        onClick={getSearch}
                        className="flex items-center justify-center px-4 border-l"
                    >
                        Search
                    </button>
                </div>
                {showDropdown && (
                    <div className="mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {searchResults.map((result, index) => (
                                index < 10 && (
                                    <a
                                        key={index}
                                        href={result.link}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b last:border-b-0"
                                        role="menuitem"
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
