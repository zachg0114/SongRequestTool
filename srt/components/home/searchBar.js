"use client";

import { useRef, useState, useEffect } from "react";
import getSearchResults from "./getSearch";
import ConfirmModal from "../confirm/confirmModal";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export const SearchBar = () => {
  const searchRef = useRef();
  const dropdownRef = useRef();
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [id, setId] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const getSearch = async () => {
    setIsLoading(true);
    const results = await getSearchResults(searchRef.current.value);
    setIsLoading(false);
    setSearchResults(results);
    setShowDropdown(results?.length > 0);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await getSearch();
    }
  };

  const onDropdownClick = (index, id) => {
    setId(id);
    onOpen();
    setShowDropdown(false);
  };

  return (
    <div className="flex justify-center mb-4 relative">
      <div className="w-full md:w-[32rem] max-w-2xl">
        <div className="flex rounded w-full">
          <Input
            radius="none"
            ref={searchRef}
            type="text"
            id="search"
            label="Enter your song here..."
            className="w-full text-white"
            variant="underlined"
            style={{ fontSize: "16px" }}
            key="outside"
            onKeyDown={handleKeyDown}
          />
          <Button
            radius="lg"
            isLoading={isLoading}
            onClick={getSearch}
            className="text-white hover:bg-purple-700 ml-2 mt-4 bg-purple-800/50"
          >
            {isLoading ? "Loading..." : "Search"}
          </Button>
        </div>
        {showDropdown && (
          <div
            className="absolute w-full mt-1 rounded-md shadow-lg bg-gray-900 text-white ring-1 ring-black ring-opacity-5 z-10 overflow-auto"
            ref={dropdownRef}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {searchResults.map(
                (result, index) =>
                  index < 10 && (
                    <a
                      key={index}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 border-b last:border-b-0"
                      role="menuitem"
                      onClick={() => onDropdownClick(index, result.id)}
                    >
                      {index + 1} - {result.title}
                    </a>
                  ),
              )}
            </div>
          </div>
        )}
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="center"
      >
        <ConfirmModal id={id} />
      </Modal>
    </div>
  );
};

