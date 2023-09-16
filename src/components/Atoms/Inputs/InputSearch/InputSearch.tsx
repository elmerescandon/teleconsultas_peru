"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { debounce } from "lodash";

type InputSearchProps = {
    placeholder?: string;
    onInputChange: (e: string) => void;
};

const InputSearch = ({ placeholder, onInputChange }: InputSearchProps) => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const debounceSearch = debounce((value: string) => {
        onInputChange(value);
    }, 300);

    useEffect(() => {
        return () => {
            debounceSearch.cancel();
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        debounceSearch(e.target.value);
    };

    return (
        <div className="flex items-center gap-4">
            <input
                className="h-14 pt-4 pr-5 border-b-2 w-60 pb-3 active:b-0 focus:ring-0 focus:border-primary-500 focus:outline-none text-lg"
                type="text"
                id="name"
                name="name"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                required
            />
            <MagnifyingGlassIcon className="h-6 w-6  text-neutral-400 -mb-5" />
        </div>
    );
};

export default InputSearch;
