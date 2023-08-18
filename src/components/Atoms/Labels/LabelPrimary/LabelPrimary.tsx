import React from "react";

type LabelPrimaryProps = {
    content: string;
};

const LabelPrimary = ({ content }: LabelPrimaryProps) => {
    return (
        <div className="text-lg bg-brand-700 text-basic-white rounded-2xl p-3">
            {content}
        </div>
    );
};

export default LabelPrimary;
