import { DocumentTextIcon } from "@heroicons/react/24/solid";
import React from "react";

type DocumentDownloadProps = {
    url: string;
    document: string;
};

const DocumentDownload = ({ url, document }: DocumentDownloadProps) => {
    return (
        <a
            className="flex flex-col items-center justify-center w-36 h-36 p-5"
            href={url}
            target="_blank"
        >
            <DocumentTextIcon className="w-10 h-10 text-brand-600" />
            <div className="mt-2 text-sm font-medium text-center">{`Ver ${document}`}</div>
        </a>
    );
};

export default DocumentDownload;
