import React from "react";

type InputFileProps = {
    onChange: (file: File) => void;
};

const InputFile = ({ onChange }: InputFileProps) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            onChange(files[0]);
        }
    };
    return (
        <input
            className="text-classic-black placeholder-neutral-400 border-neutral-300 border-2 rounded-md w-full 
    py-3 px-4 pr-10 max-xl:w-full focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
            type="file"
            onChange={handleFileChange}
        />
    );
};

export default InputFile;
