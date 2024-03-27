'use client'

import { useRef, useState, useEffect } from "react";
import getSearchResults from "./getSearch";
import ConfirmModal from "../confirm/confirmModal";
import {Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, } from "@nextui-org/react";

export const SearchBar = () => {
    const searchRef = useRef();
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [id, setId] = useState(null);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         setScreenWidth(window.innerWidth);
    //     });
    // }, []);

    const getSearch = async () => {
        setIsLoading(true);
        const results = await getSearchResults(searchRef.current.value);
        setIsLoading(false);
        setSearchResults(results);
        setShowDropdown(results?.length > 0);
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await getSearch();
        }
    };

    const onDropdownClick = (index, id) => {
        setId(id);
        onOpen();
    };

    return (
        <div className="flex justify-center mb-4 relative">
            <div className="w-full md:w-[32rem] max-w-2xl"> {/* Adjust this line */}
                <div className="flex rounded w-full">
                    <Input 
                        radius="none"
                        ref={searchRef} 
                        type="text" 
                        id="search" 
                        label="Enter your song here..."
                        className="w-full text-white"
                        variant="underlined"
                        key="outside"
                        onKeyDown={handleKeyDown}
                    />
                        <div className='pt-4'>
                        <Button 
                            radius="lg"
                            isLoading={isLoading}
                            onClick={getSearch}
                            className="flex items-center justify-center text-white hover:bg-purple-700 ml-2 bg-purple-800/50"
                        >
                            {isLoading ? (
                                <div className="flex justify-center items-center">
                                    Loading...
                                </div>
                            ) : (
                                'Search'
                            )}
                        </Button>
                        </div>
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
                                            onClick={() => onDropdownClick(index, result.id)}
                                        >
                                            {index + 1} - {result.title}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                )}
            </div>
            <Modal 
            backdrop="blur" 
            // size={screenWidth < 768 ? "xs" : "lg"}
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            isDismissable={false}
            placement="center"
                >
                    <ConfirmModal id={id}/>
                </Modal>
        </div>
    );
}
