import { debounce } from "lodash";
import React, { ChangeEvent, useRef } from "react";

type InputTextAreaProps = {
    rows: number;
    cols: number;
    placeholder: string;
    onChange: (value: string) => void;
};

const InputTextArea = ({
    rows,
    cols,
    placeholder,
    onChange,
}: InputTextAreaProps) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const dedebonceHandleChange = debounce((value: string) => {
        onChange(value);
    }, 1000);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dedebonceHandleChange(e.target.value);
    };

    return (
        <div className="flex">
            <textarea
                ref={inputRef}
                className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md px-4 py-4 resize-none max-xl:w-full"
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputTextArea;
