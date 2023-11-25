import React from "react";
import InputText from "../../Inputs/InputText/InputText";

type LabelProfileMainProps = {
    label: string;
    value: string;
    editable: boolean;
};

const LabelProfileMain = ({
    label,
    value,
    editable,
}: LabelProfileMainProps) => {
    return (
        <div
            className="flex justify-start items-center gap-5 h-full
                        max-2xl:h-full
                        max-md:flex-col max-md:items-start max-md:gap-1"
        >
            <p className="text-gray-500 w-36">{label}</p>
            {editable ? (
                <InputText onChangeFn={() => {}} placeholder="" value="" />
            ) : (
                <p className="text-lg text-right">{value}</p>
            )}
        </div>
    );
};

export default LabelProfileMain;
