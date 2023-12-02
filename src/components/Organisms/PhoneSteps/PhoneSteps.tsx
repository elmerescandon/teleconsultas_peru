import React from "react";
import PhoneStepsDestkop from "./PhoneStepsDesktop";
import PhoneStepsMobile from "./PhoneStepsMobile";

type PhoneStepsProps = {
    color: string;
};

const PhoneSteps = ({ color }: PhoneStepsProps) => {
    return (
        <div>
            <PhoneStepsDestkop color={color} />
            <PhoneStepsMobile color={color} />
        </div>
    );
};

export default PhoneSteps;
