import React from "react";

type LabelInformationProps = {
    label: string;
    value: string;
};

const LabelInformation = ({ label, value }: LabelInformationProps) => {
    return (
        <div
            className="flex justify-start  items-start gap-5 py-4
                    max-md:flex-col max-md:items-start max-md:gap-2 max-md:py-2"
        >
            <p
                className="text-lg text-gray-500 w-ful
                    max-xl:w-auto max-xl:text-base max-xl:font-semibold
                    "
            >
                {label}
            </p>
            <p
                className="text-lg text-right w-full
                          max-md:text-left max-xl:text-base"
            >
                {value !== "" ? value : "-"}
            </p>
        </div>
    );
};

export default LabelInformation;
