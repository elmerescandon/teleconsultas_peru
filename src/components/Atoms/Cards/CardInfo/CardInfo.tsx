import React from "react";

type CardInfoProps = {
    text: string;
};

const CardInfo = ({ text }: CardInfoProps) => {
    return (
        <div className="text-lg py-3 px-5 bg-brand-50 rounded-xl w-1/4 text-brand-900">
            {text}
        </div>
    );
};

export default CardInfo;
