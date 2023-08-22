import React from "react";

type InputTextAreaProps = {
    rows: number;
    cols: number;
    placeholder: string;
};

const InputTextArea = ({ rows, cols, placeholder }: InputTextAreaProps) => {
    return (
        <div className="flex">
            <textarea
                className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md px-4 py-4 resize-none max-xl:w-full"
                rows={rows}
                cols={cols}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputTextArea;
