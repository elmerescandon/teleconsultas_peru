import React from "react";

type LabelPrimaryProps = {
    content: string;
};

const LabelPrimary = ({ content }: LabelPrimaryProps) => {
    return (
        <div className="text-lg bg-brand-200 text-basic-black rounded-3xl p-3 text-center w-44">
            {content}
        </div>
    );
};

export default LabelPrimary;
