import React from "react";

type LabelPrimaryProps = {
    content: string;
};

const LabelPrimary = ({ content }: LabelPrimaryProps) => {
    return (
        <div
            className="text-lg bg-brand-200 text-basic-black rounded-3xl p-3 text-center w-44 
                        max-2xl:w-auto max-2xl:text-base max-2xl:px-6 max-2xl:py-2"
        >
            {content}
        </div>
    );
};

export default LabelPrimary;
