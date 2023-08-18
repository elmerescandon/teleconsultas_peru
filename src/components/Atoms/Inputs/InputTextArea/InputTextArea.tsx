import React from "react";

type InputTextAreaProps = {
    rows: number;
    cols: number;
};

const InputTextArea = ({ rows, cols }: InputTextAreaProps) => {
    return (
        <div className="flex">
            <textarea
                className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md px-4 resize-none max-xl:w-full"
                rows={rows}
                cols={cols}
            />
        </div>
    );
};

export default InputTextArea;
