'use client'

import { useRef, useState, useEffect } from "react";
import getSearchResults from "./getSearch";
import ConfirmModal from "../confirm/confirmModal";
import {Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Dropdown, DropdownMenu, DropdownTrigger, DropdownItem} from "@nextui-org/react";

export const SearchBar = () => {
    const searchRef = useRef();
    const dropDownButtonRef = useRef();
    const [searchResults, setSearchResults] = useState([]);
    const [id, setId] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);

    

    const getSearch = async () => {
        setIsLoading(true);
        if(searchRef.current.value === '') {
            setIsLoading(false);
            setSearchResults([]);
            return;
        }
        const results = await getSearchResults(searchRef.current.value);
        setIsLoading(false);
        results?.forEach((result, index) => {
            result.index = index;
        });
        setSearchResults(results);
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            dropDownButtonRef.current.click();
        }
    };

    const onDropdownClick = (id) => {
        setId(id);
        onOpen();
    };

    return (
        <div className="flex justify-center mb-4 relative">
            <div className="flex rounded w-full md:w-[32rem] max-w-2xl">
                    <Input 
                        radius="none"
                        ref={searchRef} 
                        type="text" 
                        id="search" 
                        label="Enter your song here..."
                        className="w-full text-white"
                        variant="underlined"
                        key="outside"
                        style={{fontSize: '16px'}}
                        onKeyDown={handleKeyDown}
                    />
                    <Dropdown
                        classname="w-full"
                        >
                    <DropdownTrigger>
                    <Button 
                        radius="lg"
                        ref={dropDownButtonRef}
                        isLoading={isLoading}
                        onClick={getSearch}
                        className="text-white hover:bg-purple-700 ml-2 mt-4 bg-purple-800/50"
                    >
                        {isLoading ? 'Loading...' : 'Search'}
                    </Button>
                    </DropdownTrigger>
                <DropdownMenu aria-label="Search Results" items={searchResults} onAction={(key) => onDropdownClick(key)}>
                {(item) => (
                <DropdownItem
                        key={item.id}
                    >
                                        <a>
                                        {item.index + 1} - {item.title}
                                    </a>
                                
                    </DropdownItem>
                )}
                </DropdownMenu>
                </Dropdown>
            </div>
            <Modal 
                backdrop="blur"
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                isDismissable={false}
                placement="center"
            >
                <ConfirmModal id={id}/>
            </Modal>
        </div>
    );
};