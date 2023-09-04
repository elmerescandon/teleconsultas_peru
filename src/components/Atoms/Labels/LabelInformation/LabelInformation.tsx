import React from "react";

type LabelInformationProps = {
    label: string;
    value: string;
};

const LabelInformation = ({ label, value }: LabelInformationProps) => {
    return (
        <div className="flex justify-start max-xl:flex-col items-center gap-5 h-12">
            <p className="text-lg text-gray-500 w-full">{label}</p>
            <p className="text-lg text-right w-full">
                {value !== "" ? value : "-"}
            </p>
        </div>
    );
};

export default LabelInformation;
