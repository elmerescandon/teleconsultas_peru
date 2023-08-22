import React from "react";

type InputTextAreaProps = {
    rows: number;
    cols: number;
    placeholder: string;
    message: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const InputTextArea = ({
    rows,
    cols,
    placeholder,
    message,
    onChange,
}: InputTextAreaProps) => {
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e);
    };

    return (
        <div className="flex">
            <textarea
                className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md px-4 py-4 resize-none max-xl:w-full"
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                value={message}
                onChange={handleMessageChange}
            />
        </div>
    );
};

export default InputTextArea;
