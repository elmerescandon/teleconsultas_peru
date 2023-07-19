'use client';
import React, { useRef } from 'react';

type SearchBarProps =  {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const searchText = inputRef.current.value;
    //   onSearch(searchText);
    }
  };

  return (
    <div>
      <button
        className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
      <input
        type="text"
        ref={inputRef}
        className="border border-gray-400 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Enter your search term"
      />
    </div>
  );
};

export default SearchBar;




