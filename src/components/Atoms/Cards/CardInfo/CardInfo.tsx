import React from "react";

type CardInfoProps = {
    text: string;
};

const CardInfo = ({ text }: CardInfoProps) => {
    return (
        <div className="text-lg py-3 px-5 bg-brand-500 text-basic-white rounded-xl w-1/4">
            {text}
        </div>
    );
};

export default CardInfo;
