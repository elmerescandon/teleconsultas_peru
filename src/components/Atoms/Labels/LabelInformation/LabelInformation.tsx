import React from "react";

type LabelInformationProps = {
    label: string;
    value: string;
    style?: string;
};

const LabelInformation = ({
    label,
    value,
    style = "",
}: LabelInformationProps) => {
    return (
        <div
            className="flex justify-start items-center gap-5 py-4
                    max-md:flex-col max-md:items-start max-md:gap-2 max-md:py-2"
        >
            <p
                className="text-lg text-gray-500 w-ful
                    max-xl:w-auto max-xl:text-base max-xl:font-semibold
                    "
            >
                {label}
            </p>
            <div
                className={`text-lg text-right 
                          max-md:text-left max-xl:text-base w-full ${style}`}
            >
                {value !== "" ? value : "-"}
            </div>
        </div>
    );
};

export default LabelInformation;
