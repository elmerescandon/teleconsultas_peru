import React, { useRef, useState, useEffect } from "react";
import { debounce } from "lodash";

interface InputTextAreav2Props {
    initialValue?: string;
    onChange: (value: string) => void;
    rows?: number;
    cols?: number;
    placeholder?: string;
}

const InputTextAreav2 = ({
    initialValue = "",
    onChange,
    rows,
    cols,
    placeholder,
}: InputTextAreav2Props) => {
    const [value, setValue] = useState(initialValue);
    const debouncedOnChange = useRef(debounce(onChange, 300)).current;

    useEffect(() => {
        debouncedOnChange(value);
    }, [value, debouncedOnChange]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    return (
        <textarea
            className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md px-4 py-4 resize-none w-full"
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

export default InputTextAreav2;
