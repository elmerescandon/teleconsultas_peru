import React from "react";

type CardFeatureProps = {
    iconComponent: React.ReactNode;
    title: string;
};

const CardFeature = ({ iconComponent, title }: CardFeatureProps) => {
    return (
        <div className="w-44 h-44 flex flex-col gap-5">
            {iconComponent}
            <div>{title}</div>
        </div>
    );
};

export default CardFeature;
