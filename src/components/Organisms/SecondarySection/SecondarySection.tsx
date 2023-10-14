import InformationLanding from "@/components/Molecules/InformationLanding/InformationLanding";
import Image from "next/image";
import React from "react";

type SecondarySectionProps = {
    order: string;
    miniHeader: string;
    title: string;
    content: string;
    pathImage: string;
    sizeImage: number;
};

const SecondarySection = ({
    order,
    content,
    miniHeader,
    pathImage,
    title,
    sizeImage,
}: SecondarySectionProps) => {
    return (
        <div
            className={`flex ${
                order === "left" ? "flex-row" : "flex-row-reverse"
            } items-center bg-brand-50 justify-center flex-wrap py-10`}
        >
            <InformationLanding
                content={content}
                miniHeader={miniHeader}
                title={title}
            />

            <Image
                className="max-w-xl rounded-xl border-brand-600 border-2 max-lg:max-w-sm max-sm:max-w-xs"
                src={pathImage}
                height={sizeImage ? sizeImage : "50"}
                width={sizeImage ? sizeImage : "50"}
                alt={`${miniHeader}-image`}
            />
        </div>
    );
};

export default SecondarySection;
