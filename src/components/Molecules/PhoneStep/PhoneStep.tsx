import React from "react";

type PhoneStepProps = {
    number: number;
    title: string;
};

const PhoneStep = ({ number, title }: PhoneStepProps) => {
    return (
        <div className="flex items-center gap-3 font-semibold">
            <p className="text-3xl text-salufy-gray">{title}</p>
            <p className="text-basic-white rounded-full p-4 py-6 bg-brand-600 h-10 flex items-center justify-center text-2xl font-semibold">
                {number}
            </p>
        </div>
    );
};

export default PhoneStep;
