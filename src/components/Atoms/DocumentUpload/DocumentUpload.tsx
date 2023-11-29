import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import PopUpUploadFile from "../PopUp/PopUpUploadFile/PopUpUploadFile";

type DocumentUploadProps = {
    type: string;
    id: string;
    document: string;
    correct: boolean;
    setCorrect: (state: boolean) => void;
};

const DocumentUpload = ({
    document,
    id,
    type,
    correct,
    setCorrect,
}: DocumentUploadProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="flex flex-col items-center justify-center"
                onClick={() => setOpen(true)}
            >
                <CloudArrowUpIcon className="w-10 h-10 text-brand-600" />
                <div className="mt-2 text-sm font-medium text-center">{`Sube tu ${document}`}</div>
            </button>
            {open && (
                <PopUpUploadFile
                    id={id}
                    type={type}
                    onClose={() => {
                        setOpen(false);
                    }}
                    correct={correct}
                    setCorrect={setCorrect}
                />
            )}
        </div>
    );
};

export default DocumentUpload;
