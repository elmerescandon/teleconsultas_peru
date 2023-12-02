import React from "react";

type PhoneStepProps = {
    number: number;
    title: string;
};

const PhoneStep = ({ number, title }: PhoneStepProps) => {
    return (
        <div
            className="flex items-center gap-3 font-semibold
                        max-lg:justify-end max-lg:text-right"
        >
            <p
                className="text-3xl text-salufy-gray 
                            max-xl:text-3xl
                            max-lg:tex-2xl
                            max-md:text-xl"
            >
                {title}
            </p>
            <p
                className="text-basic-white rounded-full p-4 py-6 bg-brand-600 h-10 flex items-center justify-center text-2xl font-semibold
                          max-lg:text-base max-lg:p-2 max-lg:py-4 max-lg:h-4
            "
            >
                {number}
            </p>
        </div>
    );
};

export default PhoneStep;
