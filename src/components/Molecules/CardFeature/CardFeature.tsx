import React from "react";

type CardFeatureProps = {
    iconComponent: React.ReactNode;
    title: string;
};

const CardFeature = ({ iconComponent, title }: CardFeatureProps) => {
    return (
        <div className="h-72 flex flex-col gap-1 items-center bg-brand-200 py-3 px-10 rounded-xl max-xl:h-64 max-xl:px-5">
            <div className="rounded-full bg-brand-100 px-4 py-2">
                {iconComponent}
            </div>
            <div className="text-center text-2xl font-semibold w-56 text-salufy-blue">
                {title}
            </div>
        </div>
    );
};

export default CardFeature;
