import React from "react";

type CardFeatureProps = {
    iconComponent: React.ReactNode;
    title: string;
};

const CardFeature = ({ iconComponent, title }: CardFeatureProps) => {
    return (
        <div className="h-64 flex flex-col gap-5 items-center bg-brand-50 py-8 px-3 rounded-xl">
            <div className="rounded-full bg-brand-100 p-4">{iconComponent}</div>
            <div className="text-center text-2xl font-semibold w-56">
                {title}
            </div>
        </div>
    );
};

export default CardFeature;
