import React from "react";

type RegisterHeadersProps = {
    currentStep: number;
    steps: string[];
};

const RegisterHeaders = ({ currentStep, steps }: RegisterHeadersProps) => {
    return (
        <div className="flex flex-row items-center justify-center gap-36 pb-10">
            {steps.map((step, index) => (
                <p
                    key={index}
                    className={`text-3xl ${
                        currentStep === index + 1
                            ? "text-basic-black font-semibold max-xl:block"
                            : "text-neutral-300 max-xl:hidden"
                    }`}
                >
                    {step}
                </p>
            ))}
        </div>
    );
};

export default RegisterHeaders;
